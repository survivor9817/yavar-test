import CloseBtn from "./CloseBtn";

const Fehrest = ({ style, onClose }) => {
  return (
    <>
      <div className="sidebar sidebar-right" style={style}>
        <CloseBtn onClick={onClose} />

        <div className="fehrest-section">
          <header className="fehrest-header">
            <label htmlFor="BookSelector" className="book-selector-label">
              فهرست کتاب
            </label>
            <select id="BookSelector" name="BookSelector" className="book-selector"></select>
          </header>
          <ol id="fehrestList" className="fehrest-list"></ol>
        </div>
      </div>
    </>
  );
};

export default Fehrest;
