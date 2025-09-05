const Menu = ({ state, onClose }) => {
  return (
    <>
      <div className="sidebar sidebar-left" style={{ transform: `translateX(${state * -105}%)` }}>
        <button id="MenuCloserBtn" className="closer-btn" onClick={onClose}>
          <i className="msr icon--cancel"> cancel </i>
        </button>
        <div className="menu-section">
          <img src="./imgs/reza.jpg" alt="user-img" className="user-img" />
          <div className="user-name">رضا قزلسفلو</div>
          <span className="user-role">معلم مدرسه</span>
          <div className="divider"></div>
          <ul className="menu-items-container">
            <li className="menu-item">صفحه کاربری</li>
            <li className="menu-item">خرید جدید</li>
            <li className="menu-item">تمرین‌های قبلی</li>
            <li className="menu-item">طراحی امتحان</li>
            <li className="menu-item">اضافه کردن سؤال</li>
            <li className="menu-item">تنظیمات</li>
          </ul>
        </div>
      </div>
      <div id="MenuBackdrop" className="backdrop menu-backdrop"></div>

      <div
        id="MenuBackdrop"
        className="backdrop menu-backdrop"
        style={{ display: `${state === 1 ? "none" : "block"}` }}
        onClick={onClose}
      ></div>
    </>
  );
};

export default Menu;
