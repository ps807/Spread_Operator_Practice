import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function handleClick(event) {
    setItems((prevValue) => {
      return [...prevValue, newItem];
    });
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={newItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
