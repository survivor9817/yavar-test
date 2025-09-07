const TabBtn = ({ label, icon, onClick }) => {
  return (
    <>
      <button
        className="flex flex-row max-[600px]:flex-col justify-center items-center h-14 w-16 cursor-pointer transition-colors hover:bg-[#ddd] flex-grow"
        onClick={onClick}
      >
        <i className={`msr text-[32px] ${icon === "exercise" && "rotate-45"}`}>{icon}</i>
        <span className="text-[16px] max-[600px]:text-[14px] mr-2 max-[600px]:mr-0">{label}</span>
      </button>
    </>
  );
};

export default TabBtn;
