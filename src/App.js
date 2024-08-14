import { useState } from "react";
import { InputField } from "./component/InputField";
import { Header } from "./component/Header";
import { PhoneNumber } from "./component/PhoneNumber";
import { Dropdown } from "./component/Dropdown";
import { RadioButtons } from "./component/RadioButton";

function App() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setIsValid(true);
  };

  const validatePhoneNumber = () => {
    const stringLength = value.length;
    return stringLength === 10;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validatePhoneNumber()) {
      setIsValid(false);
    } else {
      // Handle the case when the form is valid
      setSuccessMessage("Thank you for registering. See you soon");
    }
  };

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          fieldName="First Name"
          placeholder="Enter First Name"
        />
        <InputField
          type="text"
          fieldName="Last Name"
          placeholder="Enter Last Name"
        />
        <InputField
          type="email"
          fieldName="Email Address"
          placeholder="Enter email"
        />
        <PhoneNumber
          fieldName="Contact Number"
          type="tel"
          placeholder="Enter Mobile Number"
          value={value}
          handleChange={handleChange}
          isValid={isValid}
        />
        <InputField
          type="text"
          fieldName="Organization Name"
          placeholder="Enter Organization Name"
        />
        <Dropdown
          label="role"
          fieldName="Role"
          options={["Software Engineer", "QA Engineer", "DevOps Engineer"]}
        />
        <InputField
          type="number"
          fieldName="Work Experience (in years)"
          placeholder="Enter Work Experience"
        />
        <InputField
          type="url"
          fieldName="LinkedIn Profile URL"
          placeholder="Enter Linkedin Profile Link"
        />
        <RadioButtons fieldName="Can attend online?" options={["Yes", "No"]} />
        <Dropdown
          label="preferredTime"
          fieldName="Preferred Time Slot"
          options={["10 AM -11 AM", "2 PM - 3 PM", "5 PM - 6 PM"]}
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
      {successMessage && <p className="successMessage">{successMessage}</p>}
    </div>
  );
}

export default App;
