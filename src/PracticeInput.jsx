/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

function PracticeInput() {
  const [inputData, setInputData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
  });

  const submitHandler = (e) => {
    const { name, value } = e.target;

    // Update only the specific field in inputData
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <input placeholder="name" onChange={submitHandler} type="text" name="name" />
        <br />
        <input placeholder="phone" onChange={submitHandler} type="text" name="phone" />
        <br />
        <input placeholder="email" onChange={submitHandler} type="text" name="email" />
        <br />
        <input placeholder="subject" onChange={submitHandler} type="text" name="subject" />
      </div>
      <p>name: {inputData.name}</p>
      <p>phone: {inputData.phone}</p>
      <p>email: {inputData.email}</p>
      <p>subject: {inputData.subject}</p>
    </div>
  );
}

export default PracticeInput;
