const { Query } = require('./Query')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { post } = require('./Mutation/post')
const { AuthPayload } = require('./AuthPayload')
import { GraphQLDateTime} from 'graphql-custom-types'; 

module.exports = {
  GraphQLDateTime,
  Query,
  Mutation: {
    ...auth,
    ...post,
  },
  Subscription,
  AuthPayload,
}
