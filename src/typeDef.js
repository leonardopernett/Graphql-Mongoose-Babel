export const typeDefs = `
  
    type Query {
      getUsers:[User]!
      getOneUser(id:ID):User
    }

    type User{
        _id:ID!
        nickname:String!,
        fullname:String!,
        phone:String,
        city:String
    }

    type Mutation {
        createUser(nickname:String!, fullname:String!, phone:String, city:String):User
        deleteUser(id:ID):User
        updateUser(id:ID, nickname:String!, fullname:String!, phone:String, city:String ):User
    }

`
