import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const appCache = new InMemoryCache();
const link = new HttpLink({
    url: `${process.env.REACT_APP_URL}/graphql`
})

const client = new ApolloClient({
    cache: appCache,
    link
});

export default client;