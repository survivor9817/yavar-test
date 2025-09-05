const SidebarBtn = ({ label, icon, className = ``, iconStyles, onClick }) => {
  return (
    <>
      <button className={`nav-btn w-16 ${className}`} onClick={onClick}>
        <i className={`msr ${iconStyles}`}> {icon} </i>
        <span className="hidden max-[600px]:block max-[600px]:mr-2 max-[600px]:text-[16px]">
          {label}
        </span>
      </button>
    </>
  );
};

export default SidebarBtn;
