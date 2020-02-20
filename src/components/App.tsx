import * as React from "react";

import Header from "./Header";
import TodoPrivateWrapper from "./Todo/TodoPrivateWrapper";
import TodoPublicWrapper from "./Todo/TodoPublicWrapper";
import OnlineUsersWrapper from "./OnlineUsers/OnlineUsersWrapper";

import { useAuth0 } from "./Auth/react-auth0-spa";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";

const creatApolloClient: ApolloClientGen = authToken =>
  new ApolloClient<NormalizedCacheObject>({
    link: new WebSocketLink({
      uri: "wss://hasura.io/learn/graphql",
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        }
      }
    }),
    cache: new InMemoryCache()
  });

const App = ({ idToken }: { idToken: string }) => {
  const { loading, logout } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  const client = creatApolloClient(idToken);
  return (
    <ApolloProvider client={client}>
      <div>
        <Header logoutHandler={logout} />
        <div className="container-fluid p-left-right-0">
          <div className="col-xs-12 col-md-9 p-left-right-0">
            <div className="col-xs-12 col-md-6 sliderMenu p-30">
              <TodoPrivateWrapper />
            </div>
            <div className="col-xs-12 col-md-6 sliderMenu p-30 bg-gray border-right">
              <TodoPublicWrapper />
            </div>
          </div>
          <div className="col-xs-12 col-md-3 p-left-right-0">
            <div className="col-xs-12 col-md-12 sliderMenu p-30 bg-gray">
              <OnlineUsersWrapper />
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};

type ApolloClientGen = (
  authToken: string
) => ApolloClient<NormalizedCacheObject>;

export default App;
