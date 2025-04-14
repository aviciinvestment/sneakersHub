import React from "react";
import { useState } from "react";
import cancel from "../assets/icon-cross.svg";

const Todos = ({ item, onDeleteitems, mode, deleteone, filter, setitem }) => {
  const [checked, setChecked] = useState(false);
  const items = [];
  if (filter === 1) {
    items.push(...item);
  } else if (filter === 2) {
    items.push(
      ...item.filter((elem) => {
        return !elem.state;
      })
    );
  } else {
    items.push(
      ...item.filter((elem) => {
        return elem.state;
      })
    );
  }

  const remainder_items = items.filter((elem) => {
    return !elem.state;
  });

  //function that deletes 1 item
  function handel(e) {
    deleteone(items, Number(e.target.dataset.user));
  }

  const checkedclicked = (e) => {
    setChecked(!checked);
    const updateditem = [...items];
    updateditem[Number(e.target.dataset.user)].state = checked;
    setitem(updateditem);
  };

  function clear() {
    onDeleteitems(items);
  }
  return (
    <div style={items.length === 0 ? { display: "none" } : null}>
      <div
        className="alltodos"
        style={
          mode
            ? {
                backgroundColor: "hsl(0, 0%, 98%)",
                color: "hsl(235, 21%, 11%)",
              }
            : null
        }
      >
        {items.map((elem, i) => {
          elem.id = i;
          return (
            <div
              className="eachtodowithcancel"
              key={i}
              style={
                mode
                  ? {
                      backgroundColor: "hsl(0, 0%, 98%)",
                      color: "hsl(235, 21%, 11%)",
                      borderBottom: "0.5px solid hsl(235, 21%, 11%)",
                    }
                  : null
              }
            >
              <div className="eachtodo">
                <div
                  data-user={i}
                  key={i}
                  onClick={checkedclicked}
                  className={`${elem.state ? "Tick Tick_effect" : "Tick"}`}
                  style={
                    mode
                      ? {
                          backgroundColor: "hsl(0, 0%, 98%)",
                          border: "0.1rem solid hsl(235, 21%, 11%)",
                        }
                      : null
                  }
                >
                  {elem.state ? "✔" : ""}
                </div>
                <div
                  style={
                    elem.state
                      ? {
                          textDecoration: "line-through",
                          color: "hsl(233, 14%, 35%)",
                        }
                      : {}
                  }
                >
                  {elem.todo}
                </div>
              </div>
              <div>
                <img
                  key={i}
                  data-user={i}
                  onClick={handel}
                  src={cancel}
                  alt="cancel"
                />
              </div>
            </div>
          );
        })}

        <div className="settodo">
          <div>{remainder_items.length} items left</div>
          <div onClick={clear}>Clear completed</div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
