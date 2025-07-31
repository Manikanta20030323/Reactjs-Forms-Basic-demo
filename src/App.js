import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    country:""
  });
console.log(formData);
  function changeHandler(event){
      setFormData((formData)=>({
        ...formData,
      [event.target.name] : event.target.value
      }))
  }
  return (
   <div>
    <form>
      <label>First Name</label>
      <br></br>
      <input type="text" name="firstName" placeholder="Enter your name" onChange={changeHandler} className="border"></input>
      <br></br>
      <br></br>
        <label>Last Name</label>
      <br></br>
      <input type="text" name="lastName" placeholder="Enter your name" onChange={changeHandler} className="border"></input>
      <br></br>
      <br></br>
        <label>Email</label>
      <br></br>
      <input type="email" name="email" placeholder="Enter your name" onChange={changeHandler} className="border"></input>
      <br></br>
      <br></br>
        <label>Country</label>
      <br></br>
      <select className="border" name="country" onChange={changeHandler}>
        <option>Please select one</option>
        <option value="India">India</option>
        <option value="Mexico">Mexico</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>
      <br></br>
      <br></br>
      <div>
        <label>By Email</label>
        <div>
          <input type="checkbox" name="emailcheckbox" id="comment"></input>
          <label htmlFor="comment" >Comments</label>
        </div>
        <div>
          <input type="checkbox" name="emailcheckbox" id="Candidates"></input>
          <label htmlFor="Candidates" >Candidates</label>
        </div>
        <div>
          <input type="checkbox" name="emailcheckbox" id="Offers"></input>
          <label htmlFor="Offers" >Offers</label>
        </div>
      </div>

      <div>
        <div>
          push notifications
        </div>
        <input type="radio" id="Everything"/>
        <label htmlFor="Everything" >Everything</label>
        <br/>
        <input type="radio" id="same"/>
        <label htmlFor="same" >same as email</label>
        <br/>
        <input type="radio" id="notify"/>
        <label htmlFor="notify" >no such notify</label>
        <br/>
        <br/>
      </div>
    </form>
   </div>
  );
}

export default App;
