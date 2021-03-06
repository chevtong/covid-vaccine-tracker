import React from "react";

function Selections({ setCategory }) {
  return (
    <div className="select-container">
      <select onChange={(e) => setCategory(e.currentTarget.value)}>
        <option value="all">Show By Catergories</option>
        <option value="region">By Region</option>
        <option value="age">By Age</option>
        <option value="gender">By Gender</option>
      </select>
    </div>
  );
}

export default Selections;
