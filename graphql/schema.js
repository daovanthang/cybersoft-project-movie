const { buildSchema } = require("graphql");
const { GraphQLScalarType } = require("graphql/type");
const Date = new GraphQLScalarType({
  name: "Date",
  serialize(value) {
    return value;
  },
});
const graphqlSchema = buildSchema(`
scalar Date

type Cineplex {
    id: Int!
    codeCineplex: String!
    name: String!
    logo: String!
    aliase: String!
}
type Cinema {
    id: Int!
    name: String!
    image: String!
    address: String!
    cineplex:Cineplex!
}
type ResponseUpdate {
    id:Int!
    status:String!
}
type Movie {
    id: Int!
    name: String!
    startDate: Date!
    time: Int!
    evaluate: Int!
    poster: String!
    trailer: String!
}

type Role {
    id:Int!
     roleName: String!
     description: String!
 }
    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
        phone: String!
        age: Int!
        avatar:String!
        roles:[Role]!
    }
    type UserPagination {
        currentPage: Int!
        count: Int!
        totalPages: Int!
        totalCount: Int!
        items:[User]!
    }
    type MoviePagination {
        currentPage: Int!
        count: Int!
        totalPages: Int!
        totalCount: Int!
        items:[Movie]!
    }
    type rootQuery {
        cinemas(codeCineplex: String!):[Cinema]!
        cineplexs:[Cineplex]!
        movies:[Movie]!
        movieWithPage(page:Int!, number:Int!):MoviePagination!
        movieWithPageByDay(page:Int!, number:Int!, from:Date!, to:Date!, name:String!):MoviePagination!
        movie(id:Int): Movie!
        user(id:Int): User!
        users:[User]!
        userByEmail(email: String!):User!
        userWithPage(page:Int!, number:Int!):UserPagination!
        role(id:Int): Role!
        roles:[Role]!
    }
    input InputUser {
        name: String!
        email: String!
        password: String!
        phone: String!
        age: Int!
        roleName:String!
    }
    input InputRole{
        roleName: String!
        description: String!
    }
    input InputMovie{
        name: String!
        startDate: Date!
        time: Int!
        evaluate: Int!
        poster: String!
        trailer: String!
    }
    type rootMutation {
        createMovie(inputMovie: InputMovie): Movie!
        removeMovie(id:Int!):Movie!
        updateMovie(id:Int!,inputMovie:InputMovie!):ResponseUpdate!
        createUser(inputUser:InputUser) : User!
        removeUser(id:Int!):User!
        updateUser(id:Int!,inputUser:InputUser!):ResponseUpdate!
        createRole(inputRole: InputRole) : Role!
        removeRole(id:Int!):Role!
    }
    schema {
        query : rootQuery
        mutation: rootMutation
    }
`);

module.exports = {
  graphqlSchema,
};
