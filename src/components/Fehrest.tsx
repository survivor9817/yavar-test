import CloseBtn from "./CloseBtn";
import { bookNames } from "../data/booksData.js";
import { useEffect, useRef, useCallback, useMemo } from "react";
import FehrestList from "./FehrestList.js";

const Fehrest = ({ style, onClose, onChange, bookName, fehrest, setCurrentPageNumber }) => {
  const bookItems = bookNames.map((bookName) => (
    <option key={bookName} value={bookName}>
      {bookName}
    </option>
  ));

  const observerRef = useRef(null);
  const lastRefPageRef = useRef(null);
  const lastActivesRef = useRef([]);
  const lastExpandedsRef = useRef([]);

  // تابع کمکی برای toggle کلاس
  const toggleClass = useCallback((el, className) => {
    el?.classList.toggle(className);
  }, []);

  // پیدا کردن شماره صفحه مرجع
  const fehrestPages = useMemo(() => fehrest.map((item) => item.refPage), [fehrest]);
  const findRefTitlePageNumber = useCallback(
    (pageNumber) => {
      if (fehrestPages.includes(pageNumber)) return pageNumber;
      return Math.max(...fehrestPages.filter((page) => page < pageNumber));
    },
    [fehrestPages]
  );

  // آپدیت UI فهرست
  const updateFehrestUI = useCallback(
    (observingPageNumber) => {
      const refPage = findRefTitlePageNumber(observingPageNumber);
      if (refPage === lastRefPageRef.current) return;
      lastRefPageRef.current = refPage;

      // حذف کلاس‌های قبلی
      lastActivesRef.current.forEach((el) => toggleClass(el, "active"));
      lastExpandedsRef.current.forEach((el) => toggleClass(el, "expanded"));

      // پیدا کردن عناصر جدید
      const fehrestList = document.querySelector("#fehrestList");
      if (!fehrestList) return;
      const LI = fehrestList.querySelector(`div[data-ref-page="${refPage}"]`);
      const siblingOL = LI?.nextElementSibling;
      const parentOL = LI?.closest("ol.articles");
      const higherLI = parentOL?.previousElementSibling;

      // ذخیره عناصر جدید
      lastActivesRef.current = [LI, higherLI].filter(Boolean);
      lastExpandedsRef.current = [parentOL, siblingOL].filter(Boolean);

      // اعمال کلاس‌های جدید
      toggleClass(LI, "active");
      if (siblingOL) {
        toggleClass(siblingOL, "expanded");
      } else {
        toggleClass(parentOL, "expanded");
        toggleClass(higherLI, "active");
      }
    },
    [findRefTitlePageNumber, toggleClass]
  );

  // callback برای observer
  const observerCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const observedPageNumber = +entry.target.id.replace("page", "");
        setCurrentPageNumber(observedPageNumber);
        updateFehrestUI(observedPageNumber);
      });
    },
    [updateFehrestUI]
  );

  // راه‌اندازی Observer
  useEffect(() => {
    const observerOptions = {
      root: document.querySelector(".book-section"),
      rootMargin: "-49% 0% -49% 0%",
      threshold: 0,
    };

    // ساخت observer
    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    // observe کردن صفحات
    const pagesToWatch = document.querySelectorAll(".book-section .page");
    pagesToWatch.forEach((page) => observerRef.current.observe(page));

    // cleanup
    return () => {
      if (observerRef.current) {
        pagesToWatch.forEach((page) => observerRef.current.unobserve(page));
        observerRef.current.disconnect();
      }
    };
  }, [fehrest, observerCallback]);

  // مدیریت کلیک روی فهرست
  useEffect(() => {
    function scrollOnSection(event) {
      const refPageTitle = event.target.closest("li div");
      if (!refPageTitle) return;
      const relatedPage = document.querySelector(`#page${refPageTitle.dataset.refPage}`);
      if (!relatedPage) return;
      relatedPage.scrollIntoView();
    }

    const fehrestList = document.querySelector("#fehrestList");
    if (!fehrestList) return;

    fehrestList.addEventListener("click", scrollOnSection);

    return () => {
      fehrestList.removeEventListener("click", scrollOnSection);
    };
  }, []);

  return (
    <>
      <div className="sidebar sidebar-right" style={style}>
        <CloseBtn onClick={onClose} />

        <div className="fehrest-section">
          <header className="fehrest-header">
            <label htmlFor="BookSelector" className="book-selector-label">
              فهرست کتاب
            </label>
            <select
              id="BookSelector"
              name="BookSelector"
              className="book-selector"
              value={bookName}
              onChange={onChange}
            >
              {bookItems}
            </select>
          </header>
          <ol id="fehrestList" className="fehrest-list">
            <FehrestList fehrestData={fehrest} />
          </ol>
        </div>
      </div>
    </>
  );
};

export default Fehrest;
