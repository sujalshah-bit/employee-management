"use client";

import { useContext, useState } from "react";
import Success from "./Success";
import { context } from "../page";

export default function AddUserForm() {
  const [state, setState] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    date: "",
    salary: 0,
    status: "",
  });
  const { firstname, lastname, email, date, salary } = data;
  const { dispatch1 } = useContext(context);


  // BUTTON HANDLING
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://employee-management-api.vercel.app/api/create", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ data }),
    });
    setData({
      firstname: "",
      lastname: "",
      email: "",
      date: "",
      salary: 0,
      status: "",
    });
    setState(true);
    dispatch1({ type: "change" });
  };

  return (
    <>
      {state ? <Success message={"Data Added"}></Success> : <></>}
      <form
        className="grid grid-cols-1 gap-1 md:grid-cols-2 my-5 "
        onSubmit={handleSubmit}
      >
        <div className="p-3 border border-gray-400">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={firstname}
            name="firstname"
            placeholder="Name"
            className="w-full border-none outline-none"
          />
        </div>
        <div className="p-3 border border-gray-400">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={lastname}
            name="lastname"
            placeholder="Last Name"
            className="w-full border-none outline-none"
          />
        </div>
        <div className="p-3 border border-gray-400">
          <input
            type="email"
            onChange={(e) => handleChange(e)}
            value={email}
            name="email"
            placeholder="Email"
            className="w-full border-none outline-none"
          />
        </div>
        <div className="p-3 border border-gray-400">
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={salary}
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
            value={date}
            name="date"
            id="date"
          />
        </div>
        <div className="p-3 border border-gray-400">
          <input
            type="radio"
            onChange={(e) => handleChange(e)}
            id="active"
            name="status"
            value="Active"
          />
          <label className="mx-3">Active</label>
          <input
            type="radio"
            onChange={(e) => handleChange(e)}
            id="inactive"
            name="status"
            value="Inactive"
          />
          <label className="mx-3">Inactive</label>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white flex items-center justify-center rounded-[5px] gap-2 w-[140px] h-[28px] md:w-[150px] md:h-[40px] hover:bg-green-900 "
        >
          Add Employee +
        </button>
      </form>
    </>
  );
}
