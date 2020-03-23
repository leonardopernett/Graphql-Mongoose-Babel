import {GraphQLServer} from 'graphql-yoga';
import {typeDefs} from './typeDef';
import {resolvers} from './Resolver'

import './database'

const server = new GraphQLServer({
    typeDefs, resolvers
});

server.start(()=>console.log('server running on localhost:4000'))