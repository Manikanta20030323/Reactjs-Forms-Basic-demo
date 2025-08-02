import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"",
    emailcheckboxComment:false,
    notification:""
  });
// console.log(formData);
  function changeHandler(event){
      setFormData((formData)=>({
        ...formData,
      [event.target.name] : event.target.type==="checkbox" ? (event.target.checked)  : event.target.value
      }));
  }

  function submisision(event){
    // event.preventDefault();
    console.log(formData);
  }
  return (
   <div>
    <form action={submisision}>
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
          <input type="checkbox" value={formData.emailcheckboxComment} name="emailcheckboxComment" id="comment" onChange={changeHandler}></input>
          <label htmlFor="comment" >Comments</label>
        </div>
        <div>
          <input type="checkbox" value="Candidates" name="emailcheckboxCandidates" id="Candidates"></input>
          <label htmlFor="Candidates" >Candidates</label>
        </div>
        <div>
          <input type="checkbox" value="Offers" name="emailcheckboxOffers" id="Offers"></input>
          <label htmlFor="Offers" >Offers</label>
        </div>
      </div>

      <div>
        <div>
          push notifications
        </div>
        <input type="radio" id="Everything" name="notification" value="Everything" onChange={changeHandler} />
        <label htmlFor="Everything" name="Everything">Everything</label>
        <br/>
        <input type="radio" id="same" name="notification" value="SameAsEmial" onChange={changeHandler}/>
        <label htmlFor="same" >same as email</label>
        <br/>
        <input type="radio" id="notify" value="NotNotification" name="notification" onChange={changeHandler}/>
        <label htmlFor="notify" >no such notify</label>
        <br/>
        <br/>
      </div>

      <button type="submit">Save</button>
    </form>
   </div>
  );
}

export default App;
