import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import SidebarBtn from "./SidebarBtn";
import TabBtn from "./TabBtn";
import Fehrest from "./Fehrest";
import Menu from "./Menu";
import Backdrop from "./Backdrop";
import TabIndicator from "./TabIndicator";
import Book from "./Book";
import Quiz from "./Quiz";
import Yavar from "./Yavar";
import { booksData } from "../data/booksData.js";

const Layout = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFehrestOpen, setIsFehrestOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wasFehrestOpen, saveFehrestState] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 1440px)");

  const styles = {
    fehrest: { transform: `translateX(${isFehrestOpen ? 0 : 105}%)` },
    menu: { transform: `translateX(${isMenuOpen ? 0 : -105}%)` },
    fehrestBack: { display: isFehrestOpen && isSmallScreen ? "block" : "none" },
    menuBack: { display: isMenuOpen ? "block" : "none" },
    tabIndicator: { transform: `translateX(${activeTab * -100}%)` },
    tabsContainer: { transform: `translateX(${activeTab * (100 / 3)}%)` },
  };

  function closeFehrest() {
    setIsFehrestOpen(false);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

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
    closeFehrest();
    setActiveTab(1);
  }

  function goToYavar() {
    isFehrestOpen && saveFehrestState(isFehrestOpen);
    closeFehrest();
    setActiveTab(2);
  }

  const [currentBookName, setCurrentBookName] = useState(Object.keys(booksData)[0]);
  const [currentFehrest, setCurrentFehrest] = useState(booksData[currentBookName].fehrest);
  const [currentContent, setCurrentContent] = useState(booksData[currentBookName].content);

  function updateBook(event) {
    const newBookName = event.target.value;
    setCurrentBookName(newBookName);
    setCurrentFehrest(booksData[newBookName].fehrest);
    setCurrentContent(booksData[newBookName].content);
  }

  return (
    <>
      <Fehrest
        style={styles.fehrest}
        onClose={closeFehrest}
        onChange={updateBook}
        bookName={currentBookName}
        fehrest={currentFehrest}
      />
      <Backdrop style={styles.fehrestBack} className={"z-[65] opacity-25"} onClick={closeFehrest} />

      <Menu style={styles.menu} onClose={closeMenu} />
      <Backdrop style={styles.menuBack} className={"z-[80] opacity-50"} onClick={closeMenu} />

      <div className="m-auto max-w-[840px] min-w-[320px] overflow-hidden flex flex-col max-[600px]:flex-col-reverse">
        <div className="flex bg-[#eee] overflow-hidden">
          <SidebarBtn label={"فهرست"} icon={"list"} iconSize={"text-4xl"} onClick={toggleFehrest} />
          <div className="flex flex-grow relative">
            <TabBtn label={"کتاب"} icon={"menu_book"} onClick={goToBook} />
            <TabBtn label={"تمرین"} icon={"exercise"} onClick={goToQuiz} />
            <TabBtn label={"یاور"} icon={"school"} onClick={goToYavar} />
            <TabIndicator style={styles.tabIndicator} />
          </div>
          <SidebarBtn label={"منو"} icon={"menu"} iconSize={"text-3xl"} onClick={toggleMenu} />
        </div>

        <div className="tabs" style={styles.tabsContainer}>
          <Book content={currentContent} />
          <Quiz />
          <Yavar />
        </div>
      </div>
    </>
  );
};

export default Layout;
