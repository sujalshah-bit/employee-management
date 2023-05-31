"use client";

import { useReducer, useState, useContext } from "react";
import Success from "./Success";
import Bug from "./Bug";
import { context } from "../page";
// const reducer = (state, event) => {
//   return {
//     ...state,
//     [event.target.name]: event.target.value,
//   };
// };


export default function UpdateUserForm() {
  const { state1, dispatch1, state2, dispatch2 ,state3, dispatch3} = useContext(context);

  const [data, setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    date:"",
    salary:0,
    status:""


  })
  
  const handleChange = (e)=>{
    setData({...data, [e.target.name]:e.target.value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (Object.keys(data).length === 0) {
      return console.log("Dont Have Enough data");
    }
    setData({
      firstname:"",
      lastname:"",
      email:"",
      date:"",
      salary:0,
      status:""
    })
    

    const resp = await fetch(`https://employee-management-api.vercel.app/api/${state3}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    });
    dispatch2({type:"FLAG_TRUE"})
    dispatch1({type:"change"})
    console.log(data);
  };
  // if (Object.keys(data).length > 0)
  //   return <Success message={"Data Added"}></Success>;
  // if (Object.keys(display).length==0) return <Bug message ={"Opps Error Occured"}></Bug>
  return (
    <>
      <form
        className="grid grid-cols-1 gap-1 md:grid-cols-2 my-5"
        onSubmit={handleSubmit}
      >
        <div className="p-3 border border-gray-400">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            name="firstname"
            placeholder="Name"
            className="w-full border-none outline-none"
          />
        </div>
        <div className="p-3 border border-gray-400">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            name="lastname"
            placeholder="Last Name"
            className="w-full border-none outline-none"
          />
        </div>
        <div className="p-3 border border-gray-400">
          <input
            type="email"
            onChange={(e) => handleChange(e)}
            name="email"
            placeholder="Email"
            className="w-full border-none outline-none"
          />
        </div>
        <div className="p-3 border border-gray-400">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            name="salary"
            placeholder="Salary"
            className="w-full border-none outline-none"
          />
        </div>
        <div className="p-3 border border-gray-400">
          <label htmlFor="date" className="mr-2">
            Date:
          </label>
          <input
            type="date"
            onChange={(e) => handleChange(e)}
            name="date"
            id="date"
          />
        </div>
        <div className="p-3 border border-gray-400">
          <input
            type="radio"
            onChange={(e) => handleChange(e)}
            id="active"
            name="defaultActive"
            value="Active"
          />
          <label className="mx-3">Active</label>
          <input
            type="radio"
            onChange={(e) => handleChange(e)}
            id="inactive"
            name="defaultActive"
            value="Inactive"
          />
          <label className="mx-3">Inactive</label>
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white flex items-center justify-center rounded-[5px] gap-2 w-[140px] h-[28px] md:w-[150px] md:h-[40px] hover:bg-purple-900 "
        >
          Update 
        </button>
      </form>
    </>
  );
}
