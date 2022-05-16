import React, { useState } from "react";

function Form() {
  const [formData, setformData] = useState({firstName: "John", lastName: "Henry", admin: false});

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;
    //usin `checked` property of checkboxes instead of 'value'
    if(event.target.type=== "checkbox"){
      value = event.target.checked;
    }
    setformData({...formData, [name]:value,});
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
        
      />
      <input
        type="text"
        name ="lastName"
        onChange={handleChange}
        value={FormDataEvent.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
    </form>
  );
}

export default Form;
