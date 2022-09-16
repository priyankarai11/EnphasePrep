import React, { Component } from 'react';

class Child extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            item: "sac"
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props.name)
        return {item:props.name}
    }

    render() {
        console.log("render function")
        return (
            <div>
                name : {this.state.item}
            </div>
        );
    }
}

export default Child;