import Fehrest from "./Fehrest";
import Menu from "./Menu";
import Book from "./Book";
import Quiz from "./Quiz";
import Yavar from "./Yavar";
import { useState } from "react";
import TabBtn from "./TabBtn";

const Layout = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFehrestOpen, setIsFehrestOpen] = useState(false); // 1 is closed, 0 is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wasFehrestOpen, saveFehrestState] = useState(false);

  function toggleFehrest() {
    setActiveTab(0);
    setIsFehrestOpen((prev) => !prev);
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function goToBook() {
    setActiveTab(0);
    if (wasFehrestOpen) setIsFehrestOpen(true);
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

  const styles = {
    tabBtn: `flex flex-row max-[600px]:flex-col justify-center items-center h-14 w-16 cursor-pointer transition-colors hover:bg-[#ddd]`,
    tabBtnLabel: `text-[16px] max-[600px]:text-[14px] mr-2 max-[600px]:mr-0`,
    tabIndicator: `absolute bottom-0 right-0 max-[600px]:top-0 w-1/3 h-1 bg-blue-400 transition-transform ease-out duration-300 rounded-4xl`,
  };

  return (
    <>
      <Fehrest state={isFehrestOpen} onClose={() => setIsFehrestOpen(false)} />
      <Menu state={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="m-auto max-w-[840px] min-w-[320px] overflow-hidden flex flex-col max-[600px]:flex-col-reverse">
        <div className="flex bg-[#eee] overflow-hidden">
          <button className={`${styles.tabBtn}`} onClick={() => toggleFehrest()}>
            <i className="msr text-[36px] scale-x-[-1]"> list </i>
            <span className="hidden max-[600px]:block text-[14px]">فهرست</span>
          </button>

          <div className="flex flex-grow relative">
            <TabBtn label={"کتاب"} icon={"menu_book"} onClick={() => goToBook()} />
            <TabBtn label={"تمرین"} icon={"exercise"} onClick={() => goToQuiz()} />
            <TabBtn label={"یاور"} icon={"school"} onClick={() => goToYavar()} />
            <div
              id="TabIndicator"
              className={`${styles.tabIndicator}`}
              style={{ transform: `translateX(${activeTab * -100}%)` }}
            ></div>
          </div>

          <button className={`${styles.tabBtn}`} onClick={() => toggleMenu()}>
            <i className="msr text-[30px] scale-x-[-1]"> menu </i>
            <span className="hidden max-[600px]:block text-[14px]">منو</span>
          </button>
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
