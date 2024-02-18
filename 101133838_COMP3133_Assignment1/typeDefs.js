const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type AuthPayload {
    token: String!
    user: User!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: Float!
  }

  type Query {
    login(username: String!, password: String!): AuthPayload 
    getAllEmployees: [Employee]
    searchEmployeeById(_id: ID!): Employee
  }

  input SignUpInput {
    username: String!
    email: String!
    password: String!
  }

  input AddEmployeeInput {
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: Float!
  }

  input UpdateEmployeeInput {
    _id: ID!
    first_name: String
    last_name: String
    email: String
    gender: String
    salary: Float
  }

  type Mutation {
    signUp(input: SignUpInput): AuthPayload
    addNewEmployee(input: AddEmployeeInput): Employee
    updateEmployeeById(input: UpdateEmployeeInput): Employee
    deleteEmployeeById(_id: ID!): String # Returns a success message
  }
`;

module.exports = typeDefs;
