const CloseBtn = ({ onClick }) => {
  return (
    <button className="closer-btn" onClick={onClick}>
      <i className="msr text-4xl"> cancel </i>
    </button>
  );
};

export default CloseBtn;
