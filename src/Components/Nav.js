import React, { Component } from 'react'
import {Link} from 'react-router-dom'


 class Nav extends Component {
     constructor(props){
         super(props)
         this.HandleClick=this.HandleClick.bind(this)
        console.log(props.history)
         
        }
    
       HandleClick(e,history){
        e.preventDefault();
        console.log(this.props.history);
        this.props.history.push('/home')
       }
    render() {
    
        return (
            <div>
                <h1>LoGO</h1>
                <button onClick={this.HandleClick}>OnclickAbout</button>
                <ul>
                    <Link to="/about"> 
                    <li>About</li>
                    </Link>
              
                    <li>Home</li>
                
                    </ul>
                
            </div>
        )
    }
}
export default Nav