import CloseBtn from "./CloseBtn";
import { bookNames } from "../data/booksData.js";

const Fehrest = ({ style, onClose, onChange, bookName, fehrest }) => {
  const bookItems = bookNames.map((bookName) => (
    <option key={bookName} value={bookName}>
      {bookName}
    </option>
  ));

  // تابع کمکی برای ساخت آیتم‌ها
  const createFehrestItems = () => {
    const items = [];
    let i = 0;

    while (i < fehrest.length) {
      const item = fehrest[i];
      const { id, refTitle, refPage, indent } = item;

      const isNewSection = indent === 0;
      const isChapter = id.split("-").pop() === "0";

      const itemContent = (
        <div
          key={id}
          data-ref-page={refPage}
          data-id={id}
          className={isChapter ? "chapter" : "article"}
        >
          {refTitle}
        </div>
      );

      if (isNewSection) {
        // بررسی آیا آیتم‌های بعدی زیرمجموعه هستند
        const subItems = [];
        let j = i + 1;

        while (j < fehrest.length && fehrest[j].indent > 0) {
          const subItem = fehrest[j];
          const subItemContent = (
            <div
              key={subItem.id}
              data-ref-page={subItem.refPage}
              data-id={subItem.id}
              className={subItem.id.split("-").pop() === "0" ? "chapter" : "article"}
            >
              {subItem.refTitle}
            </div>
          );

          subItems.push(<li key={subItem.id}>{subItemContent}</li>);
          j++;
        }

        if (subItems.length > 0) {
          items.push(
            <li key={id}>
              {itemContent}
              <ol className="articles">{subItems}</ol>
            </li>
          );
        } else {
          items.push(<li key={id}>{itemContent}</li>);
        }

        i = j; // پرش به آیتم بعدی که پردازش نشده
      } else {
        i++;
      }
    }

    return items;
  };

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
            {createFehrestItems()}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Fehrest;
