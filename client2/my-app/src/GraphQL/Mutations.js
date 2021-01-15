import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation CreateProAccount(
    $firstName: String!
    $lastName: String!
    $mail: String!
    $password: String
    

  ) {
    CreateProAccount(
      firstName: $firstName
      lastName: $lastName
      mail: $mail
      password: $password
     
    ) {
      id
    }
  }
`;