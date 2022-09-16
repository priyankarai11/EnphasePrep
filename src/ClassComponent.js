import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor()
    {
        super()
        this.state = {
            count:0
        }
    }

    handleClick = () => {
        this.setState(
          prevState => ({
            count: prevState.count + 1,
          }),
           () => console.log(this.state.count)
        )
    }
    render() {
        return (
            <div>
                Count {this.state.count}  
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default ClassComponent;