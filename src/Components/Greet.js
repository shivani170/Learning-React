
import React from 'react'

 //function Greet() {
   // return (
    //    <div>
      //       const Greet=()=><h2>hello shivani</h2>
             
        //</div>
    //)
//}
const  Greet=(props)=>{
const {name,heroname}=props
return<div>
  <h1> hello {name} a.k.a {heroname}</h1>
{props.children}
</div> }

export default Greet