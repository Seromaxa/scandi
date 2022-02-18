import {ApolloClient,InMemoryCache,from} from '@apollo/client'
import { errorLink } from './errorsHendler'
import { httpLink } from './link'
import {CATEGORIES} from './quiries'


const client = new ApolloClient({
    cache:new InMemoryCache(),
    link:from([errorLink,httpLink])
})

/// Fetchers

export const AllCategories = async ()=>{
    return client.query({query:CATEGORIES})
}