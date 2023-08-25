import '../styles/globals.css'; // 상대 경로로 스타일 시트를 가져옵니다.
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { AppProps } from 'next/app';

const authToken = 'YOUR_AUTH_TOKEN'; // Hasura나 다른 인증 방식에 따라서 토큰을 설정합니다.

// Apollo Client를 생성합니다.
const client = new ApolloClient({
  uri: 'https://hana-donkey.hasura.app/v1/graphql', // Hasura GraphQL 엔드포인트 URL
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${authToken}`, // 인증 토큰을 헤더에 추가합니다.
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
