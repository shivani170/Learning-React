import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor(){
        super()
        this.state={
            active:null,
            who:null,
            counter:0
        }
    }
    componentDidUpdate(prevState){
        if(prevState.who==this.state.who){
         console.log("ComponentDidUpdate")
         this.setState({who:"Siya Bhatt"})
        }
    }
    render() {
        return (
            <div>
                <h1>React Component Did Mount</h1>
                <button onClick={()=>this.setState({counter:this.state.counter+1})}>counter {this.state.count}</button>
                <button onClick={()=>this.setState({active:"yes"})}>Update who :{this.state.who}</button>
            </div>
        )
    }
}
