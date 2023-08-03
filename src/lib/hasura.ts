import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://hasura.io/learn/graphql', // 여기에 하수라 API의 엔드포인트 주소를 입력해주세요.
  }),
  cache: new InMemoryCache(),
});

export default client;
