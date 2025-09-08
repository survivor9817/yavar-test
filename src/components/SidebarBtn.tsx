const SidebarBtn = ({ label, icon, iconSize, onClick }) => {
  return (
    <>
      <button
        className="flex flex-row max-[600px]:flex-col justify-center items-center h-14 w-16 cursor-pointer transition-colors hover:bg-[#ddd]"
        onClick={onClick}
      >
        <i className={`msr ${iconSize} scale-x-[-1]`}> {icon} </i>
        <span className="hidden max-[600px]:block text-[14px]">{label}</span>
      </button>
    </>
  );
};

export default SidebarBtn;
