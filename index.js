const express = require("express");
const app = express();
const { rootRouter } = require("./routers/root.routers");
const path = require("path");

//setup graphql
const { graphqlHTTP } = require("express-graphql");
const { graphqlResolvers } = require("./graphql/resolvers");
const { graphqlSchema } = require("./graphql/schema");
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema, //enter schema
    rootValue: graphqlResolvers, // enter resolvers
    graphiql: true, //turn on tool
  })
);

//setup static file -> accecss file server
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));
// setup app su dung data dang json

app.use(express.json());
app.use("/api", rootRouter);

app.listen(3000, () => {
  console.log("app run on port 3000");
});
