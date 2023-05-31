"use client";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Nav from "./components/Nav";
import { AiOutlineUserAdd } from "react-icons/ai";
import Table from "./components/Table";
import Form from "./components/Form";


export const context = createContext();

const initialState1 = false;
export const firstReducer = (state, action) => {
  switch (action.type) {
    case "change":
      return true;
    case "Nochange":
      return false;
    default:
      return state;
  }
};

  
  
export default function Home() {
  const [state1, dispatch1] = useReducer(firstReducer, initialState1);

  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const toggleForm = () => {
    setVisible(!visible);

  };


  
  
  return (
    <>
      <context.Provider  value={{state1, dispatch1}}>
        {/* Navigation */}
        <Nav></Nav>
        {/* Main  */}
        <main className="w-full xl:w-[1200px] m-auto">
          {/* Button  */}
          <div className="my-5">
            <button
              onClick={toggleForm}
              className="bg-indigo-600 text-white flex items-center justify-center rounded-[5px] gap-2 w-[140px] h-[28px] md:w-[150px] md:h-[40px] hover:bg-black  "
            >
              Add Employee <AiOutlineUserAdd />
            </button>
          </div>
          {visible ? <Form></Form> : <></>}
          {/* Table */}
          <Table></Table>
        </main>
      </context.Provider>
    </>
  );
}
