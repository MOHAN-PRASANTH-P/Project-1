import { useState } from 'react'
import './App.css'

import Image from "./assets/Image1.avif"
import { use } from 'react'

function App() {

    const [name,setName] = useState("Mohan Prasanth P")
    const [age,setAge] = useState(19)
    const [dob,setDob] = useState("14-03-2006")
    const [email,setEmail] = useState("abc123@gmail.com")
    const [phone,setPhone] = useState("+91 7862209888")
    const [gender,setGender] = useState(true)
    const [Status,setStatus] = useState(true)

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleDOB = (e) => {
        setDob(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

  return(
    <>
    <div>
    <div className="Body">
        <form>
            <table>
                <div className='img'><img src={Image}/></div>
               <tr>
                   <td>Name </td><td><label>{name}</label></td>
               </tr>
               <tr> 
                   <td>Age </td><td><label>{age}</label></td>
               </tr>
               <tr>
                   <td>Date of Birth  </td><td><label>{dob}</label></td>
               </tr>
               <tr>
                   <td>E-mail  </td><td><label>{email}</label></td>
               </tr>
               <tr>
                   <td>Phone </td><td><label>{phone}</label></td>
               </tr>
               <tr>
                  <td>Select Course </td>
                  <td>
                    <select aria-placeholder="--">7
                        <option>MongoDB</option>
                        <option>ExpressJS</option>
                        <option>ReactJS</option>
                        <option>NodeJS</option>
                    </select>
                  </td>
               </tr>
           </table>
        </form>
    </div>
        {/* <div className='Data'>
            <label htmlFor="">Name : <input type='text' placeholder='Enter your name'  onChange={handleName}/></label>
            <label htmlFor="">Age : <input style={
                {marginLeft:"50px"}
            } type='number' placeholder='Enter your age' onChange={handleAge}/></label>
            <label htmlFor="">DOB : <input  style={
                {marginLeft:"40px"}} type='date' placeholder='Enter your DOB'  onChange={handleDOB}/></label>
            <label htmlFor="">Email : <input style={
                {marginLeft:"40px"}} type='text' placeholder='Enter your Email' onChange={handleEmail}/></label>
        </div> */}
    </div>
    </>
    )
}
export default App