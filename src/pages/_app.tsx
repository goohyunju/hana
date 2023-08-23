import '@/styles/globals.css';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import client from '../lib/hasura';


const authToken = 'YOUR_AUTH_TOKEN';
const client = createApolloClient(authToken);

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={polloClient}>
      <Component {...pageProps}>
      </Component>
    </ApolloProvider>
  );
}