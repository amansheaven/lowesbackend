const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const allTypes = require('./types/index');
const allQueries = require('./allQueries');
const allMutations = require('./allMutations');
const resolvers = require('./resolvers/index');

console.log("this going in ",`${allQueries} ${allMutations} ${allTypes}`)
const schema = buildSchema(`${allQueries} ${allMutations} ${allTypes}`);

console.log("schema", schema);

const express_graphiql = (req,res) => {
    return express_graphql({
        schema:schema,
        rootValue: resolvers,
        graphiql:true,
    })(req,res);
};

module.exports = express_graphiql;