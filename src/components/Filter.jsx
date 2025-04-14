import React from "react";

const Filter = ({
  oncreateitems,
  active,
  completed,
  createitems,
  mode,
  all,
  filter,
}) => {
  return (
    <div className="all_last">
      <div
        className="filter"
        style={
          mode
            ? {
                backgroundColor: "hsl(0, 0%, 98%)",
                color: "hsl(225, 2.20%, 63.50%)",
              }
            : null
        }
      >
        <div style={filter === 1 ? { color: "blue" } : null} onClick={all}>
          All
        </div>
        <div style={filter === 2 ? { color: "blue" } : null} onClick={active}>
          Active
        </div>
        <div
          style={filter === 3 ? { color: "blue" } : null}
          onClick={completed}
        >
          Completed
        </div>
      </div>
      <div className="advice">Drag and drop to reorder list</div>
    </div>
  );
};

export default Filter;
