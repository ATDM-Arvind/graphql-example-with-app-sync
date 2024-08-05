import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//     uri: 'https://flyby-router-demo.herokuapp.com/',
//     cache: new InMemoryCache(),
     
//   });

export const client = new ApolloClient({
    uri: "https://eoarukcwg5fj3kki5gdugqvx4m.appsync-api.us-east-1.amazonaws.com/graphql",
    cache: new InMemoryCache(),
    headers: {
      "x-api-key": "da2-44evswogojg3dlz7wmkexrazlm",
    },
  });