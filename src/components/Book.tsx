import { useEffect, useMemo, useRef } from "react";
import { convertToEnglishDigits } from "../utils/convertToEnglishDigits";
import { toFaNums } from "../utils/toFaNums";
import { getLocalData } from "../hooks/getLocalData";

const Book = ({ bookName, content, currentPageNumber, setCurrentPageNumber }) => {
  const renderedPages = useMemo(() => {
    return content.map(({ id, content }) => {
      const pageNumber = toFaNums(id);
      return (
        <section key={id} id={`page${id}`} className="page">
          <div>{`صفحه ${pageNumber}`}</div>
          <div>
            <p>{content}</p>
            <img src="" alt="" width={"700px"} height={"600px"} />
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

  useEffect(() => {
    goToPage(getLocalData(bookName, 1));
  }, [bookName]);

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
    goToPage(inputPage);
  }

  function onInputNumber(e) {
    const input = e.target;
    const inputValue = input.value;

    if (inputValue === "") {
      setCurrentPageNumber("");
      return;
    }

    const value = convertToEnglishDigits(inputValue);
    const max = content.length;

    if (value === "0" || isNaN(value) || +value > max) {
      const previousValue = currentPageNumber === "" ? "" : toFaNums(currentPageNumber);
      input.value = previousValue;
      input.style.backgroundColor = "rgb(255, 124, 124)";
      setTimeout(() => {
        input.style.backgroundColor = "white";
      }, 300);
    } else {
      goToPage(value);
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
                currentPageNumber === "" || currentPageNumber === 0
                  ? onFocusPageNumber.current // can be 1 maybe
                  : currentPageNumber
              }
              onChange={onInputRange}
            />

            <input
              id="PageInputNumber"
              type="text"
              inputMode="numeric"
              onChange={onInputNumber}
              onFocus={onFocus}
              onBlur={onBlur}
              value={
                currentPageNumber === "" || currentPageNumber === 0
                  ? ""
                  : toFaNums(currentPageNumber)
              }
            />
          </div>
        </div>

        <div id="BookSection" className="book-section">
          {renderedPages}
        </div>
      </div>
    </>
  );
};

export default Book;
