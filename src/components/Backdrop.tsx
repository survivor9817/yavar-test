const Backdrop = ({ className = ``, onClick, style }) => {
  return (
    <div
      className={`hidden w-screen h-screen fixed bg-black ${className}`}
      style={style}
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
