import { useEffect, useState } from "react";

// Custom hook
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (e) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

const Fehrest = ({ state, onClose }) => {
  const isSmallScreen = useMediaQuery("(max-width: 1440px)");

  const handleBackdrop = () => {
    if (isSmallScreen) {
      return state ? "block" : "none";
    }
    return "none";
  };

  return (
    <>
      <div
        className="sidebar sidebar-right"
        style={{ transform: `translateX(${state ? 0 : 105}%)` }}
      >
        <button id="FehrestCloserBtn" className="closer-btn" onClick={onClose}>
          <i className="msr icon--cancel"> cancel </i>
        </button>
        <div className="fehrest-section">
          <header className="fehrest-header">
            <label htmlFor="BookSelector" className="book-selector-label">
              فهرست کتاب
            </label>
            <select id="BookSelector" name="BookSelector" className="book-selector"></select>
          </header>
          <ol id="fehrestList" className="fehrest-list"></ol>
        </div>
      </div>
      <div
        id="FehrestBackdrop"
        className="backdrop fehrest-backdrop"
        style={{ display: handleBackdrop() }}
        onClick={onClose}
      ></div>
    </>
  );
};

export default Fehrest;
