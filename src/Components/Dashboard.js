import React, { Component } from 'react'
import Modal from './Modal'
export default class Dashboard extends Component {
    constructor(props){
        this.state={
            show:false
          
        }
        this.showClick=this.showClick.bind(this)
    }
   
    showClick=()=>{
      this.setState({
          show : !this.state.show
      });
    };
    renderLogOutModal(){
        if(this.state.show){
        return <Modal/>}
    }
   
    render() {
        return (
            <main>
                <h1>React Modal</h1>
                <button type="button" onClick={this.showClick}>Logout</button>
                {this.renderLogOutModal()}
            </main>
        )
    }
}
