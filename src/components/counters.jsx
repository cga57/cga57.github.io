import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onReset,
      onDelete,
      counters,
      onIncrement,
      onAdd,
      onCalculate,
    } = this.props;
    // console.log("Counteres - rendered");
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          {" "}
          Reset{" "}
        </button>
        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          {" "}
          AddCounter{" "}
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onAdd={onAdd}
            onIncrement={onIncrement}
            onCalculate={onCalculate}
            counter={counter}
          >
            <h4> Counter #{counter.id} </h4>
          </Counter>
        ))}
        <button onClick={onCalculate} className="btn btn-primary btn-sm m-2">
          {" "}
          CalculatePrice{" "}
        </button>
      </div>
    );
  }
}

export default Counters;
