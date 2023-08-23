import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = (authToken : string) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://hana-donkey.hasura.app/v1/graphql', // 여기에 하수라 API의 엔드포인트 주소를 입력해주세요.
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
