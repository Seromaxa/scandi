import {ApolloClient,InMemoryCache,HttpLink,from} from '@apollo/client'
import {onError} from '@apollo/client/link/error'
import {CATEGORIES} from './quiries'


///Preper

const httpLink = new HttpLink({
    uri:'http://localhost:4000'
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
        
      );
  
    if (networkError) console.log(`[Network error]: ${networkError}`);   
  });

const client = new ApolloClient({
    cache:new InMemoryCache(),
    link:from([errorLink,httpLink])
})

/// Fetchers

export const AllCategories = async ()=>{
    return client.query({query:CATEGORIES})
}