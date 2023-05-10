import "./App.css";
import { useState } from "react";
function App() {
  // const[firstName , setFirstName] = useState("")
  // const[lastName , setLastName] = useState("")

  // function handleFirstName(event){
  //   console.log(event.target.value)
  //   setFirstName(event.target.value)
  // }
  // function handleLastName(event){
  //   console.log(event.target.value)
  //   setLastName(event.target.value)
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    comments: "",
    checkbox: false,
    status: "",
    dropdown: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      const { name, value, checked, type } = event.target;
      return {
        ...prevFormData,
        // [event.target.name] : event.target.value
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    //print
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={handleChange}
        />

        <br />
        <br />
        <label htmlFor="comments">Enter your Comments</label>
        <textarea
          name="comments"
          id="comments"
          onChange={handleChange}
        ></textarea>

        <br />
        <br />
        <label htmlFor="checkbox">Am i Visible ?</label>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="Online-mode"> Online </label>
        <input
          type="radio"
          name="status"
          id="Online-mode"
          value="Online"
          onChange={handleChange}
          checked={formData.status === "Online"}
        />
        <label htmlFor="Offline-mode"> Offline</label>
        <input
          type="radio"
          name="status"
          id="Offline-mode"
          value="Offline"
          onChange={handleChange}
          checked={formData.status === "Offline"}
        />
        <label htmlFor="dropdown">Favourite Car</label>
        <select name="dropdown" onChange={handleChange} id="dropdown">
          <option value="Lambo">Lambo</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Supra">Supra</option>
        </select>
        <br /><br />
        <input type="submit" value="Submit" />
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default App;
