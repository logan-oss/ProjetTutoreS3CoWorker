import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
query{
  GetAllService{
    id
    description
    time
    price
  }
}

`; 
export default LOAD_USERS; 