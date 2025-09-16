import { useMemo } from "react";
import { convertToEnglishDigits } from "../utils/convertToEnglishDigits";

const Book = ({ content, currentPageNumber, setCurrentPageNumber }) => {
  const sections = useMemo(() => {
    return content.map(({ id, content }) => {
      const persianNumberFormat = new Intl.NumberFormat("fa-IR");
      const pageNumber = persianNumberFormat.format(id);
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

  function handlePageChange(e) {
    const inputEl = e.target;
    let newPageNumber = +convertToEnglishDigits(e.target.value);
    const max = content.length;
    if (newPageNumber > max || isNaN(newPageNumber)) {
      inputEl.value = inputEl.value.slice(0, -1);
      inputEl.style.backgroundColor = "rgb(255, 124, 124)";
      setTimeout(() => {
        inputEl.style.backgroundColor = "white";
      }, 300);
    } else {
      setCurrentPageNumber(newPageNumber);
      const pageElement = document.getElementById(`page${newPageNumber}`);
      pageElement?.scrollIntoView();
    }
  }

  function onFocus(e) {}
  function onBlur(e) {}

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
              value={currentPageNumber}
              onChange={handlePageChange}
            />
            <input
              id="PageInputNumber"
              type="text"
              value={currentPageNumber}
              onChange={handlePageChange}
              inputMode="numeric"
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
