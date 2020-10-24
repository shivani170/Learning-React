import React from 'react'
const Hello = () => {
   // return(
     //   <div className:'dumy class'>
       //     <h1>Welcome in hello world</h1>
        //</div>
    //)
    return React.createElement ('div',
                                 {id: 'hello',className:'dummy class'},
                                 React.createElement('h1',null,'This is hello page'))
}
export default Hello