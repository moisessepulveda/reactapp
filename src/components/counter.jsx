import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 1,
        imageUrl: "https://picsum.photos/200"
    }
    render() {
        return (
            <div>
                <img src={ this.state.imageUrl } />
                <span>{ this.formatCount() }</span>
                <button>increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
