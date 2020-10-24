
import {Router} from 'react-router-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import About from './Components/About'
import Nav from './Components/Nav'
import React, { useState } from 'react'
import Home from './Components/Home';
import history from './Components/history'
import ComponentDidUpdate from './Components/ComponentDidUpdate';
import Dashboard from './Components/Dashboard';
import Customselect from './Components/Customselect';
import {Dropdown} from './Components/Customselect'
import {countries} from './Components/Customselect'
const styles={
  app:{height: "100vh"},
  select:{
    width: "172px",
    color: "red",
    backgroundcolor: "#f2f4f7"
  }
}

function onChangeInput(value){
  console.log(value)
}
 function App () {
   const[value, setValue]= useState(null)
    return (/*<Router history={history}>
          <div>
            <Route path="/" component={Nav}/>
            <Switch>
            <Route path="/about" component={About}/>
            <Route path="/home" exact component={Home}/>
            </Switch>
            </div> 
     </Router> */
      /*
     <div>

          <ComponentDidUpdate/>

     </div>
     */
    /*
    <div>
      <Dashboard/>
    </div>
     */

     <div>
     <center><h1 style={{color:"red"}}><u>React Select package tutorial</u></h1></center>
            <div className="custombox">
                  <Customselect 
                  placeholder={"Select languages"}
                  isMulti={true}
                  onChange={onChangeInput} 
                  styles={styles.select}
            />
            </div>

            <Dropdown
            label= {"Select country..."}
            options={countries}
            value= {value}
            onChange={(val)=>setValue(val)}
            />
            </div>
    )
  }

export default App
