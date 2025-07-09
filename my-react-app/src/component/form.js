import { useState } from "react";

const Form = () =>{
const [ data , setData] = useState({firstName :"" , lastName:"", email:"", contact:"",gender:"", Tech:[Backend=true , Frontend= true] , selectedTech:""});
const [ error , setError ]  = useState([]);
 const [ saveData ,setSaveData] = useState([]);
const validateForm = () => {
    const newErrors = [];

    if (data.firstName === "") {
      newErrors.push("Please fill First Name");
    }
    if (data.lastName === "") {
      newErrors.push("Please fill Last Name");
    }
    if (data.email === "") {
      newErrors.push("Please fill Email");
    }
    if (data.contact === "") {
      newErrors.push("Please fill Contact");
    }
    if (data.gender === "") {
      newErrors.push("Please fill Gender");
    }

    setError(newErrors);

    if (newErrors.length === 0) {
      console.log("Form submitted successfully!", data);
    } else {
      console.log("Validation errors:", newErrors);
    }
  };

const handleFormData = (e) => {
  const { name, value } = e.target;
  
  setData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const SaveFormData = () =>{
    saveData(data)
    validateForm()

}
    return(
        <>
        <form>
        <div className="Form Data">
            <input type="text"
                    value = {data.firstName}
                    name = "firstName"
                    placeholder="FirstName"
                    onChange={handleFormData}

            />
              <input type="text"
                    value = {data.lastName}
                    name = "lastName"
                    placeholder="FirstName"
                    onChange={HandleFormData}

            />
              <input type="text"
                    value = {data.email}
                    name = "email"
                    placeholder="FirstName"
                    onChange={handleFormData}

            />
              <input type="text"
                    value = {data.contact}
                    name = "contact"
                    placeholder="FirstName"
                    onChange={handleFormData}

            />
              <input type="text"
                    value = {data.gender}
                    name = "gender"
                    placeholder="FirstName"
                    onChange={handleFormData}

            />
            <select name = "selectedTech"  value  = {data.selectedTech}   id = "Tech"  onChange = {handleFormData} >

            <option value=""> --Select ---</option>
            {data.Tech.map((index , tech) =>(
               <option key = {index} value={tech}>
            {tech}
               </option>  
            ))}  
            </select>
            <button type="button" onClick={SaveFormData}> SaveData </button>

                    {error.length > 0 && (
          <ul style={{ color: "red" }}>
            {error.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        )}

        </div>
        </form >
      
        {saveData.map( (Data) =>(
        <div className = "Form Data">
            <p>{Data.firstName}</p>
            <p>{Data.lastName}</p>
            <p>{Data.email}</p>
            <p>{Data.contact}</p>
            <p>{Data.gender}</p>
            <p>{Data.selectedTech}</p>
        </div>
        ))}
          </>
    )
}

export default Form;
