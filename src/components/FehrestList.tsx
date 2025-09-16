const FehrestList = ({ fehrestData }) => {
  const renderFehrestItems = (fehrestData) => {
    const items = [];
    let i = 0;

    while (i < fehrestData.length) {
      const item = fehrestData[i];
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
        const subItems = [];
        let j = i + 1;

        while (j < fehrestData.length && fehrestData[j].indent > 0) {
          const subItem = fehrestData[j];
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

        i = j;
      } else {
        i++;
      }
    }

    return items;
  };
  return <>{renderFehrestItems(fehrestData)}</>;
};

export default FehrestList;
