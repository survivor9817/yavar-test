import Fehrest from "./Fehrest";
import Menu from "./Menu";
import Book from "./Book";
import Quiz from "./Quiz";
import Yavar from "./Yavar";
import { useState } from "react";
import TabBtn from "./TabBtn";
import SidebarBtn from "./SidebarBtn";
import TabIndicator from "./TabIndicator";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Backdrop from "./Backdrop";

const Layout = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFehrestOpen, setIsFehrestOpen] = useState(false); // 1 is closed, 0 is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wasFehrestOpen, saveFehrestState] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 1440px)");

  function toggleFehrest() {
    setActiveTab(0);
    setIsFehrestOpen((prev) => !prev);
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function goToBook() {
    setActiveTab(0);
    wasFehrestOpen && setIsFehrestOpen(true);
    saveFehrestState(false);
  }

  function goToQuiz() {
    isFehrestOpen && saveFehrestState(isFehrestOpen);
    setIsFehrestOpen(false);
    setActiveTab(1);
  }

  function goToYavar() {
    isFehrestOpen && saveFehrestState(isFehrestOpen);
    setIsFehrestOpen(false);
    setActiveTab(2);
  }

  return (
    <>
      <Fehrest
        style={{ transform: `translateX(${isFehrestOpen ? 0 : 105}%)` }}
        onClose={() => setIsFehrestOpen(false)}
      />
      <Backdrop
        className={"z-[65] opacity-25"}
        style={{ display: isFehrestOpen && isSmallScreen ? "block" : "none" }}
        onClick={() => setIsFehrestOpen(false)}
      />

      <Menu
        style={{ transform: `translateX(${isMenuOpen ? 0 : -105}%)` }}
        onClose={() => setIsMenuOpen(false)}
      />
      <Backdrop
        className={"z-[80] opacity-50"}
        style={{ display: isMenuOpen ? "block" : "none" }}
        onClick={() => setIsMenuOpen(false)}
      />

      <div className="m-auto max-w-[840px] min-w-[320px] overflow-hidden flex flex-col max-[600px]:flex-col-reverse">
        <div className="flex bg-[#eee] overflow-hidden">
          <SidebarBtn label={"فهرست"} icon={"list"} iconSize={"text-4xl"} onClick={toggleFehrest} />
          <div className="flex flex-grow relative">
            <TabBtn label={"کتاب"} icon={"menu_book"} onClick={() => goToBook()} />
            <TabBtn label={"تمرین"} icon={"exercise"} onClick={() => goToQuiz()} />
            <TabBtn label={"یاور"} icon={"school"} onClick={() => goToYavar()} />
            <TabIndicator style={{ transform: `translateX(${activeTab * -100}%)` }} />
          </div>
          <SidebarBtn label={"منو"} icon={"menu"} iconSize={"text-3xl"} onClick={toggleMenu} />
        </div>

        <div className="tabs" style={{ transform: `translateX(${activeTab * (100 / 3)}%)` }}>
          <Book />
          <Quiz />
          <Yavar />
        </div>
      </div>
    </>
  );
};

export default Layout;
