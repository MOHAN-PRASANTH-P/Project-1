import { useState } from 'react'
import './App.css'

function App() {

  return(
    <>
    <div>
    <h1 className="fh1">Register Now!...</h1>
    <p  className="fpa">Empowering Young Developers to level up their Skills through training in Software development Technologies🧑‍💻</p>
    <div className="Body">
        <form>
            <table>
               <tr>
                   <td>Name : </td><td><input type="text" placeholder="Enter Your Name" /></td>
               </tr>
               <tr> 
                   <td>Age : </td><td><input type="number" placeholder="Enter Your Age" /></td>
               </tr>
               <tr>
                   <td>Date of Birth : </td><td><input type="date" placeholder="Enter Your DOB" /></td>
               </tr>
               <tr>
                   <td>E-mail : </td><td><input type="email" placeholder="Enter email ID" /></td>
               </tr>
               <tr>
                   <td>Phone : </td><td><input type="text" placeholder="+91" /></td>
               </tr>
               <tr>
                  <td>Select Course : </td>
                  <td>
                    <select aria-placeholder="--">
                        <option></option>
                        <option>MongoDB</option>
                        <option>ExpressJS</option>
                        <option>ReactJS</option>
                        <option>NodeJS</option>
                    </select>
                  </td>
               </tr>
               <tr>
                  <td>Upload Your Details : </td><td><input type="file" /></td>
               </tr>
               {/* <tr>
                  <td><button onClick={handleclick()}>Register</button></td><td><button>Cancel</button></td>
               </tr> */}
           </table>
        </form>
    </div>
    </div>
    </>
    )
}
export default App
