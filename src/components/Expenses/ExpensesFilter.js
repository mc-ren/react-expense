import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  // 1 Create the handler passing in the event
  // see line 19 below to wire this up.
  const dropdownChangeHandler = (event) => {
    // 3 tie the prop and event here.
    props.onChangeFilter(event.target.value);
  };

  // 8 the default value={props.selected} line 19

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;