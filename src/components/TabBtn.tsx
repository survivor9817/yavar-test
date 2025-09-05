const TabBtn = ({ label, icon, iconStyles, onClick }) => {
  return (
    <>
      <button className={`nav-btn flex-grow `} onClick={onClick}>
        <i className={`msr ${iconStyles}`}> {icon} </i>
        <span className="tab-label"> {label} </span>
      </button>
    </>
  );
};

export default TabBtn;
