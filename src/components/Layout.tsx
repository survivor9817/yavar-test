import Fehrest from "./Fehrest";
import Menu from "./Menu";
import Book from "./Book";
import Quiz from "./Quiz";
import Yavar from "./Yavar";
import SidebarBtn from "./SidebarBtn";
import { useState } from "react";
import TabBtn from "./TabBtn";

const Layout = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFehrestOpen, setIsFehrestOpen] = useState(1); // 1 is closed, 0 is open
  const [isMenuOpen, setIsMenuOpen] = useState(1);
  const [wasFehrestOpen, saveFehrestState] = useState(1);

  function toggleFehrest() {
    setActiveTab(0);
    setIsFehrestOpen((prev) => (prev === 0 ? 1 : 0));
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => (prev === 0 ? 1 : 0));
  }

  function goToBook() {
    setActiveTab(0);
    if (wasFehrestOpen === 0) setIsFehrestOpen(0);
    saveFehrestState(1);
  }

  function goToQuiz() {
    isFehrestOpen === 0 && saveFehrestState(isFehrestOpen);
    setIsFehrestOpen(1);
    setActiveTab(1);
  }

  function goToYavar() {
    isFehrestOpen === 0 && saveFehrestState(isFehrestOpen);
    setIsFehrestOpen(1);
    setActiveTab(2);
  }

  return (
    <>
      <Fehrest state={isFehrestOpen} onClose={() => setIsFehrestOpen(1)} />

      <Menu state={isMenuOpen} onClose={() => setIsMenuOpen(1)} />

      <div className="!m-auto max-w-[840px] min-w-[320px] overflow-hidden flex flex-col max-[600px]:flex-col-reverse">
        <div className="nav-bar">
          <SidebarBtn
            label={"فهرست"}
            icon={"list"}
            iconStyles={"!text-[32px] scale-x-[-1]"}
            onClick={() => toggleFehrest()}
          />
          <div className="tab-btns-container">
            <TabBtn
              label={"کتاب"}
              icon={"menu_book"}
              iconStyles={"!text-[32px]"}
              onClick={() => goToBook()}
            />
            <TabBtn
              label={"تمرین"}
              icon={"exercise"}
              iconStyles={"!text-[32px] rotate-45"}
              onClick={() => goToQuiz()}
            />
            <TabBtn
              label={"یاور"}
              icon={"school"}
              iconStyles={"!text-[32px]"}
              onClick={() => goToYavar()}
            />
            <div
              id="Indicator"
              className={
                "absolute bottom-0 right-0 max-[600px]:top-0 w-1/3 h-1 bg-blue-500 transition-transform ease-out duration-300"
              }
              style={{ transform: `translateX(${-activeTab * 100}%)` }}
            ></div>
          </div>
          <SidebarBtn
            label={"منو"}
            icon={"menu"}
            iconStyles={"!text-[30px]"}
            onClick={() => toggleMenu()}
          />
        </div>

        <div
          className="tabs-container"
          style={{ transform: `translateX(${activeTab * (100 / 3)}%)` }}
        >
          <Book />
          <Quiz />
          <Yavar />
        </div>
      </div>
    </>
  );
};

export default Layout;
