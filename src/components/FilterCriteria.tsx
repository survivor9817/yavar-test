import { useMemo } from "react";

const FilterCriteria = ({ id, label, data }) => {
  const options = useMemo(
    () =>
      data.map(({ value, text }, index) => {
        return (
          <option key={index} value={value}>
            {text}
          </option>
        );
      }),
    [data]
  );

  function handleChange(event) {
    const label = event.target.previousElementSibling;
    label.classList.add("up");
  }

  return (
    <div className="filter-criteria">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id} defaultValue={""} data-step="1" onChange={handleChange}>
        <option value=""></option>
        {options}
      </select>
    </div>
  );
};

export default FilterCriteria;
