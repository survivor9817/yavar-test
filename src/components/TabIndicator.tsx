const TabIndicator = ({ style }) => {
  return (
    <div
      id="TabIndicator"
      className="absolute bottom-0 right-0 max-[600px]:top-0 w-1/3 h-1 bg-blue-400 transition-transform ease-out duration-300 rounded-4xl"
      style={style}
    ></div>
  );
};

export default TabIndicator;
