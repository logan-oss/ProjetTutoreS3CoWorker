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
         return( <p> description: {val.description} -- price: {val.price} -- time: {val.time}</p>
                
         )
}) }
          <li>Connexion</li>
          <li>Prestation Search</li>
          <li>My prestation search</li>
      
            </div> 
    ) ;
  /*export function Html({ content, state }) {
  return (
    <html>
    <script src="js/javascript.js"></script>   
      <div>
        <nav>
          <ul>
            <li><a href="Home.html">Home</a></li>
            
            <li><a href="#">Service</a>
              <ul>
                <li><a href="rendezvous.html">Rendez-vous</a></li>
                <li><a href="rendezvousPro.html">Rendez-vous pro</a></li>
                <li><a href="myService.html">My Service</a></li>
              </ul>
            </li>
            <li><a href="MyCoworkingSpace.html">My Coworking Space</a></li>
            <li class="sign"style="float:right; width: 10%; background-color: #494e53;"><a href="signup.html">Sign Up</a></li>
            <li style="float:right; width: 10%; background-color: #3c4044"><a href="login.html">Sign In</a></li>
          </ul>
        </nav>
        </div>
        </html>   
  );
}*/
}
export default GetPro;