const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const allTypes = require('./types/index');
const allQueries = require('./allQueries');
const allMutations = require('./allMutations');
const resolvers = require('./resolvers/index');

const schema = buildSchema(`${allQueries} ${allMutations} ${allTypes}`);

const express_graphiql = (req,res) => {
    return express_graphql({
        schema:schema,
        rootValue: resolvers,
        graphiql:process.env.GRAPHQL === "dev",
    })(req,res);
};

module.exports = express_graphiql;