import { useState } from "react";
import { options } from "../data/filterOptionsData";
import FilterSelector from "./FilterSelector";

const Quiz = () => {
  const [quizStatus, setQuizStatus] = useState("off");
  const [filterHeight, setFilterHeight] = useState("130px");
  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [filtersData, setFiltersData] = useState({
    Where: "",
    Level: "",
    Source: "",
  });

  const filterHeights = {
    first: "130px",
    Where: "214px",
    Level: "300px",
    Source: "320px",
  };

  function handleChange(event) {
    const value = event.target.value;
    const id = event.target.id;

    setFiltersData({ ...filtersData, [id]: value });

    if (parseInt(filterHeights[id]) > parseInt(filterHeight)) {
      setFilterHeight(filterHeights[id]);
    }

    if (id === "Source") {
      setIsBtnVisible(true);
    }
  }

  function startQuiz(formData) {
    console.log(formData.get("Where"));
    setIsBtnVisible(false);
    setFilterHeight("130px");
    setQuizStatus("on");
    setFiltersData({
      Where: "",
      Level: "",
      Source: "",
    });
  }
  return (
    <>
      <div id="ExerciseTabContainer" className="tab-container">
        {/* <!-- filter section --> */}
        <form className="filter-section" action={startQuiz}>
          <div className="exercise-filters" style={{ height: filterHeight }}>
            <FilterSelector
              id={"Where"}
              label={"از کجای کتاب تمرین می‌خوای؟"}
              value={filtersData.Where}
              onChange={handleChange}
              options={options.Where}
            />
            <FilterSelector
              id={"Level"}
              label={"در چه سطحی باشند؟"}
              value={filtersData.Level}
              onChange={handleChange}
              options={options.Level}
            />
            <FilterSelector
              id={"Source"}
              label={"از چه منبعی باشند؟"}
              value={filtersData.Source}
              onChange={handleChange}
              options={options.Source}
            />
          </div>
          <div className={`btn-container ${isBtnVisible ? "btn-visible" : null}`}>
            <button type="submit" className="start-exercise-btn">
              <span>شروع تمرین</span>
            </button>
          </div>
        </form>

        {quizStatus === "on" ? (
          <div id="ExercisesContainer" className="exercises-container">
            {/* <!-- Row 1 : Navigation Buttons of Exercise Section --> */}
            <div className="exercise-navbar">
              <button className="btn--exercise-prev">
                <i className="msr icon-btn"> arrow_circle_right </i>
              </button>
              <button className="btn--exercise-next">
                <i className="msr icon-btn"> arrow_circle_left </i>
              </button>
            </div>

            {/* <!-- Row 2 : Exercise Number and Tags --> */}
            <div className="number-tags-container">
              <div className="exercise-number"></div>
              <div className="tags-container">
                <ul className="tags-list"></ul>
              </div>
            </div>

            {/* <!-- Row 3 : Exercise Number and Tags --> */}
            <div className="progress-wrapper">
              <div className="progress-container">
                <div className="progress-bar" id="ProgressBar"></div>
              </div>
            </div>

            {/* <!-- Row 4 : Question Box --> */}
            <div className="exercise__question-box">
              <div className="question-container"></div>

              {/* <!-- user feedbacks --> */}
              <div className="feedback-msg-container">
                <ul className="feedback-msg-list">
                  <li className="feedback-msg feedback-msg--correct">
                    <i className="msr"> check_circle </i>
                    <span>درست گفتم!</span>
                  </li>
                  <li className="feedback-msg feedback-msg--incorrect">
                    <i className="msr"> cancel </i>
                    <span>اشتباه گفتم!</span>
                  </li>
                  <li className="feedback-msg feedback-msg--like">
                    <i className="msr"> favorite </i>
                    <span>سؤال قشنگیه!</span>
                  </li>
                  <li className="feedback-msg feedback-msg--star">
                    <i className="msr"> stars </i>
                    <span>سؤال مهمیه!</span>
                  </li>
                  <li className="feedback-msg feedback-msg--report">
                    <i className="msr"> error </i>
                    <span>ایراد داره!</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Row 5 : Middle Row : answerToggle-authorLink-userInputs --> */}
            <div className="exercise__middle-bar">
              <div className="toggle-author-container">
                <div id="ShowAnswerBtn" className="btn--show-answer"></div>
                <div className="exercise-author">
                  <i className="msr"> draft_orders </i>
                  <span id="AuthorFullName"></span>
                </div>
              </div>
              <div className="details-inputBtns-container">
                <div className="exercise-details"></div>
                <div className="exercise-feedback-btns">
                  <button name="correct" className="btn--correct">
                    <i className="msr icon-btn"> check_circle </i>
                  </button>
                  <button name="incorrect" className="btn--incorrect">
                    <i className="msr icon-btn"> cancel </i>
                  </button>
                  <button name="like" className="btn--like">
                    <i className="msr icon-btn"> favorite </i>
                  </button>
                  <button name="star" className="btn--star">
                    <i className="msr icon-btn"> stars </i>
                  </button>
                  <button name="report" className="btn--report">
                    <i className="msr icon-btn"> error </i>
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- Row 6 : Answer Box --> */}
            <div className="exercise__answer-box">
              <div className="descriptive-answer"></div>
              {/* <!-- Row 7 : References --> */}
              <div className="exercise-bottom-bar">
                <ul className="ref-list"></ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Quiz;
