import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import configStore from "./store";
import { App } from "./containers";
import { BASE_PATH } from "./config";
// import { ScrollToTop } from './components';
import "./assets/css/custom.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import "antd/dist/antd.css";

import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import ScrollToTop from "./components/ScrollToTop";

const createApolloClient = (cache = {}) =>
  new ApolloClient({
    ssrMode: typeof window !== "undefined",
    cache: new InMemoryCache().restore(cache),
    link: createUploadLink({ uri: "http://3.15.137.131:5000" })
  });

const apolloClient = createApolloClient();

const { store, persistor } = configStore();

export const _store = store;

ReactDOM.render(
  <ApolloProvider
    client={apolloClient || createApolloClient(apolloClient.cache.extract())}
  >
    <Provider store={_store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
        <BrowserRouter basename={BASE_PATH}>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
