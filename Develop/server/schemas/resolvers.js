const {AuthenticationError} = require('apollo-server-express')

const {user} = require('../models')

const {signToken } = require('../utils/auth')

// resolvers does the actions that typeDefs set up
const resolvers = {
    query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await user.findOne({_id:context.user._id}).select('-__v -password')
                return userData
            }
            throw new AuthenticationError('I am Error')
        }
    },
    mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            return {token, user}
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email})
            // add logic for corret password
        }
    }
}

module.exports = resolvers

// need to finish this file for server to work; add mutations
// need to work on front end