import { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { context } from "../page";
export default function Table() {
  const { state1, dispatch1} = useContext(context);
  const [data, setData] = useState();
  const getData = async () => {
    const resp = await fetch("http://localhost:9000/api", {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    const response = await resp.json();
    setData(response);
  };
const deleteUser = async(id)=>{
  const resp = await fetch(`http://localhost:9000/api/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    dispatch1({ type: "change" });
}



  useEffect(() => {
    getData();
  }, [state1]);
  
  
  
  dispatch1({ type: "Nochange" });

  return (
    <table className="w-full text-xs md:text-lg">
      <thead className="bg-black text-white h-[40px]">
        <tr>
          <th className="font-medium">Name</th>
          <th className="font-medium">Email</th>
          <th className="font-medium">Salary</th>
          <th className="font-medium">Birthday</th>
          <th className="font-medium">Status</th>
          <th className="font-medium">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          data.map((elem, idx) => (
            <tr className="text-center h-[60px] relative" key={elem._id}>
              <td className="h-[60px] px-1 flex gap-1 md:gap-5 justify-center items-center">
                {elem.firstname} {elem.lastname}
              </td>
              <td className="h-[100%] px-1 break-all">{elem.email}</td>
              <td className="h-[100%] px-1 break-all">{elem.salary}</td>
              <td className="h-[100%] px-1 break-all">{elem.date}</td>
              <td className="h-[100%] px-1">
                <button
                  className={
                    elem.status.includes("Active")
                      ? "bg-green-600 rounded-3xl text-white w-10 h-6 md:w-20 md:h-8"
                      : "bg-red-600 rounded-3xl text-white w-10 h-6 md:w-20 md:h-8"
                  }
                >
                  {elem.status}
                </button>
              </td> 
              <td className="h-[100%] px-1 break-all flex items-center justify-center text-sm md:text-3xl gap-1 md:gap-5 cursor-pointer">
                
                <AiFillDelete color="red" onClick={() => deleteUser(elem._id)}/>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
