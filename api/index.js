const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server");
const data = require("./tweets-gql");

const PORT = 3000;
const app = express();

app.use("/graphql", jsonGraphqlExpress.default(data));
app.listen(PORT);
