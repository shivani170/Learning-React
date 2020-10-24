import React, {useState} from 'react';
import Select from 'react-select';
import './select.css'

const options= [
    {label: "React"       , value: "react" },
    {label: "React-Native", value: "react-native"},
    {label: "Java-Script" , value: "java-script"},
    {label: "CSS"         , value: "css" },
    {label: "TypeScript"  , value: "typescript"}
]

export const countries=[
    {name: "Afghanistan" , code: "AF"},
    {name:"Aruba" , code: "AR"},
    {name: "Armenia" ,code: "AM"},
    {name:"Australia",code :"AU"},
    {name: "Albania",code :"AB"},
    {name:"Antiqua and Barbuda" , code: "AG" },
    {name:"Antartica", code :"AQ"},
    {name: "America Sameua",  code:"AS"},
    {name:"Angola", code :"AL"},
    {name: "Andora", code :"AD"},
    {name:"Anquilla", code :"AQ"},
    {name:"Andorra", code:"AN"},
    {name:"India", code:"IN"},
    {name:"France", code :"FR"}
]


function Customselect({placeholder,isMulti,styles,onChange}){
    return (
        <div >
         <Select options={options}
           placeholder={placeholder}
           isMulti={isMulti}
           onChange={onChange}
           styles={{...styles}}
         />
        </div>
    )
}
export default Customselect


export function Dropdown({label,options,value,onChange}){
  const [open, setOpen] = useState(false)

    return (
       
            <div className="dropdown">
                <div className= "control"onClick={()=>setOpen((prev)=>!prev ) }>
                  {label}
                </div>
                <div className= {`options ${open ? "open" : null}`}>
                    {options.map((option)=><div className = "option"
                    onClick={()=>{onChange(option); setOpen(false)}}>{option.name}</div>)}
                    
                </div>
            </div>
    
    )
}
