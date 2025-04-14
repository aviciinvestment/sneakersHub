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
          <h5 style={createitems.length === 0 ? { display: "none" } : null}>
            All
          </h5>
        </div>
        <div style={filter === 2 ? { color: "blue" } : null} onClick={active}>
          <h5 style={createitems.length === 0 ? { display: "none" } : null}>
            Active
          </h5>
        </div>
        <div
          style={filter === 3 ? { color: "blue" } : null}
          onClick={completed}
        >
          <h5 style={createitems.length === 0 ? { display: "none" } : null}>
            Completed
          </h5>
        </div>
      </div>
      <div className="advice">whats your task for today</div>
    </div>
  );
};

export default Filter;
