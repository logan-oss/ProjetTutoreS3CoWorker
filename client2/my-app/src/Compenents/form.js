import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { formatError } from "graphql";



function Form(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

    const addUser = () => {
        createUser({
          variables: {
            firstName: firstName,
            lastName: lastName,
            mail: mail,
            password: password,
           // compagnyName: compagnyName,
          },
        });}
    
        if (error) {
          console.log(error);
        };
        return (
            <div>
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button onClick={addUser}> Create User</button>
            </div>
          );}

          export default Form;