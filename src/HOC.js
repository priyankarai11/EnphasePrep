import React, { Component } from 'react'


const Enhanced=(OriginalComp)=>
{
    class HOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count:0,
            }

        }
        handleClick = () => {
            this.setState({count:this.state.count+1})
        }

  render() {
    return <OriginalComp count={this.state.count} handleClick={this.handleClick} />;
    }
   
 }
     return HOC;
    
    }

export default Enhanced;
