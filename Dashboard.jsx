import React, { useState } from "react";

const StatusDetector = ({status}) =>{
  const getColor = ()=>{
if(status === "active") return "green";
if(status === "inactive") return "yellow";
if(status === "detected") return "pink";
return "white";
};
return <div  style={{ backgroundColor: getColor(), width: "100px", height: "100px" }}></div>
};
const Dashboard = () =>{
  const [status,setStatus] = useState("");
  return(
<div>
  <h2>Dashboard</h2>
  <button onClick={()=> setStatus("active")}>Active</button>
  <button onClick={()=>setStatus("inactive")}>Inactive</button>
  <button onClick={()=>setStatus("detected")}>Detected</button>
  <StatusDetector status = {status}/>
</div>
  );
};

export default Dashboard;

