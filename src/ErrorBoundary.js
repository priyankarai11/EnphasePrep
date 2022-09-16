import React, { Component } from 'react';

class componentName extends Component {
    constructor()
    {
        super()
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(error)
    {
        return {hasError:true}
    }

    componentDidCatch(error,info) {
        console.log(error, info)
    }

    render() {
    return this.state.hasError ? <div>Smthng went wrong</div> :
            <div>{this.props.children}</div>
    }
}

export default componentName;