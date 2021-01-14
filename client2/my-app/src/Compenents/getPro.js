import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetPro(){

  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, Setservice] = useState([]);
  useEffect(() => {
   Setservice(data.GetAllService);
    
  }, [data]);
    return(
       <div> 
         {" "}
         {users.map((val)=>{
         return <h1>{val.description}</h1>;
              
}) }
            </div> 
    ) ;
  
}
export default GetPro;