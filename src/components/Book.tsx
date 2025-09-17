import { useEffect, useMemo, useRef } from "react";
import { convertToEnglishDigits } from "../utils/convertToEnglishDigits";
import { toFaNums } from "../utils/toFaNums";
import { getLocalData } from "../hooks/getLocalData";

const Book = ({ bookName, content, currentPageNumber, setCurrentPageNumber }) => {
  const sections = useMemo(() => {
    return content.map(({ id, content }) => {
      const pageNumber = toFaNums(id);
      return (
        <section key={id} id={`page${id}`} className="page">
          <div>{`صفحه ${pageNumber}`}</div>
          <div>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
            <p>{content}</p>
          </div>
        </section>
      );
    });
  }, [content]);

  function goToPage(pageNumber) {
    if (!pageNumber || isNaN(pageNumber)) return;
    setCurrentPageNumber(pageNumber);
    const pageElement = document.getElementById(`page${pageNumber}`);
    pageElement && pageElement.scrollIntoView();
  }

  function goToPrevPage() {
    const newPage = Math.max(1, +currentPageNumber - 1);
    goToPage(newPage);
  }

  function goToNextPage() {
    const maxPage = content.length || 999;
    const newPage = Math.min(+maxPage, +currentPageNumber + 1);
    goToPage(newPage);
  }

  function onInputRange(e) {
    const inputPage = e.target.value;
    goToPage(+inputPage);
  }

  function onInputNumber(e) {
    const inputEl = e.target;
    const newPageNumber = convertToEnglishDigits(inputEl.value);
    const max = content.length;
    if (newPageNumber === "0" || isNaN(newPageNumber) || +newPageNumber > max) {
      inputEl.value = inputEl.value.slice(0, -1);
      inputEl.style.backgroundColor = "rgb(255, 124, 124)";
      setTimeout(() => {
        inputEl.style.backgroundColor = "white";
      }, 300);
    } else {
      goToPage(newPageNumber);
    }
  }

  let onFocusPageNumber = useRef(currentPageNumber);
  function onFocus(e) {
    onFocusPageNumber.current = currentPageNumber;
    e.target.select();
  }

  function onBlur(e) {
    const value = e.target.value.trim();
    value === "" && goToPage(onFocusPageNumber.current);
  }

  useEffect(() => {
    goToPage(getLocalData(bookName, 1));
  }, [bookName]);

  return (
    <>
      <div id="BookTabContainer" className="tab-container">
        <div id="bookPagination" className="book-pagination">
          <div id="PageNavigator" className="page-navigator">
            <button id="PrevPageBtn" className="btn--prev-page" onClick={goToPrevPage}>
              <i className="msr icon-btn"> arrow_circle_right </i>
            </button>
            <button id="NextPageBtn" className="btn--next-page" onClick={goToNextPage}>
              <i className="msr icon-btn"> arrow_circle_left </i>
            </button>

            <input
              id="PageInputRange"
              type="range"
              min="1"
              max={content.length}
              step="1"
              value={
                currentPageNumber === 0 || currentPageNumber === ""
                  ? onFocusPageNumber.current // can be 1 maybe
                  : currentPageNumber
              }
              onChange={onInputRange}
            />

            <input
              id="PageInputNumber"
              type="text"
              inputMode="numeric"
              value={currentPageNumber === 0 ? "" : toFaNums(currentPageNumber)}
              onChange={onInputNumber}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
        </div>

        <div id="BookSection" className="book-section">
          {sections}
        </div>
      </div>
    </>
  );
};

export default Book;
