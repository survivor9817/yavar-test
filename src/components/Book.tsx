const Book = ({ content }) => {
  const persianNumberFormat = new Intl.NumberFormat("fa-IR");
  const sections = content.map(({ id, content }) => {
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

  return (
    <>
      <div id="BookTabContainer" className="tab-container">
        <div id="BookSection" className="book-section">
          {sections}
        </div>
      </div>
    </>
  );
};

export default Book;
