// const graphqlController = require('./graphQLcontroller')
// app.use('/graphql', graphqlController)

const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');

const schema = buildSchema(`
type Query { 
    book()
}`)
