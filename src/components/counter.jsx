import React, { Component } from "react";

class Counter extends Component {
  render() {
    // no children
    // console.log(this.props);
    console.log("Counter - rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          Increment{" "}
        </button>
        <buttton
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          {" "}
          Delete{" "}
        </buttton>
        <form>
          <label>
            {"Item Name: "}
            <input type="text" />
          </label>{" "}
          <label>
            {"Item Price: "}
            <input type="numeric" id="userInput" />
            <input type="submit" onClick={this.getPrice} />
          </label>
        </form>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
  getPrice = () => {
    var input = document.getElementById("userInput").value;
    console.log(input);
    console.log("I am running");
    let price_sum = this.props.price_sum;
    price_sum += price_sum + input * this.props.counters.value;

    // this.setState({ price_sum: price_sum });
  };
}

export default Counter;
