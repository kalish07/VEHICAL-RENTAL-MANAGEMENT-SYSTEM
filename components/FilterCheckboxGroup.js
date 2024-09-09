import React from "react";

const FilterCheckboxGroup = ({ name, options, selectedOptions, onChange }) => (
  <div className="filter-section">
    <label>{name}</label>
    <div className="checkbox-group">
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </div>
  </div>
);

export default FilterCheckboxGroup;