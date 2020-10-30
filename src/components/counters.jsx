import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id} //key used interanlly by React; cant actually be accessed in counter component
            onDelete={onDelete} //sending up event to parent for them to handle
            onIncrement={onIncrement} //sending up event to parent for them to handle
            counter={counter} //carries all data about counter so we dont need to set it for each prop of counter(id, value, etc)
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
