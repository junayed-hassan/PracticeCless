import { useEffect } from "react";
import { useState } from "react";


const Practice = () => {

  const [usersDAta, setUsersData] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsersData(data))
  }, [])


  console.log(inputValue);

  const clickHandler = (id) => {
    let deleteData = usersDAta.filter(item => item.id !== id)
    setUsersData(deleteData)
  }

  let submitValue = (e, value) => {
    e.preventDefault();
    const newArray = {
      id: crypto.randomUUID(),
      name: value
    }

    setUsersData([...usersDAta, newArray])
    setInputValue('');
  }


  return (
    <div className="container mx-auto flex justify-center">
      <div className=" ">
        <div className="w-[500px] p-5  shadow-2xl h-[800px]  mt-24 rounded-xl overflow-y-scroll overflow-hidden ">
          <ul className="">
            {
              usersDAta.map((item, inx) => <li key={inx} > {item.name} <button onClick={(e) => { e, clickHandler(item.id) }} className="py-2 px-4 bg-red-500 rounded-full my-3">Delete</button></li>)

            }

          </ul>
        </div>
        <form action="" className="pb-5 " onSubmit={(e) => submitValue(e, inputValue)}>
          <div className="flex items-center justify-center">
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="border px-4 rounded-lg mt-6 w-7/12 h-11" type="text" />
            <div className="mb-[-20px]">
              <button type="submit" className="py-2 px-6 hover:scale-105 bg-black text-white rounded-xl ms-6">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div >
  );
};

export default Practice;