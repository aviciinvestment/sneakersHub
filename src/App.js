import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Create from "./components/Create";
import Todos from "./components/Todos";
import Filter from "./components/Filter";
const App = () => {
  const [mode, setMode] = useState(true);
  const [createitems, setcreateitems] = useState([]);
  const [filter, Setfilter] = useState(1);
  //function for light or dark mode by changing states of mode
  function modestate(modevar) {
    setMode(!modevar);
  }

  //function to clear all ticked items
  function deleteitems(delitem) {
    setcreateitems(
      delitem.filter((elem) => {
        return !elem.state;
      })
    );
  }
  //function that deletes 1 item
  function deleteone(delitem, i) {
    setcreateitems(
      delitem.filter((elem) => {
        return Number(elem.id) !== Number(i);
      })
    );
    //setcreateitems(());
    // console.log(elem.id, e.target.dataset.user);
  }
  //setting filter
  function all() {
    Setfilter(1);
    //return delitem.filter((elem) => {
    // return !elem.state;
    //});
  }
  function active() {
    Setfilter(2);
    //return delitem.filter((elem) => {
    //return !elem.state;
    //});
  }
  function completed() {
    Setfilter(3);
    //return delitem.filter((elem) => {
    //return !elem.state;
    //});
  }
  /////////////////////////

  function handlecreateitem(items) {
    setcreateitems([...createitems, items]);
  }
  return (
    <div>
      <div className="app">
        <Header modestate={modestate} mode={mode} />
        <Create oncreateitems={handlecreateitem} mode={mode} />
        <Todos
          setitem={setcreateitems}
          deleteone={deleteone}
          item={createitems}
          onDeleteitems={deleteitems}
          mode={mode}
          filter={filter}
        />
        <Filter
          createitems={createitems}
          oncreateitems={setcreateitems}
          active={active}
          completed={completed}
          all={all}
          mode={mode}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default App;
