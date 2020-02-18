import ApolloClient from "apollo-boost";
import { _store } from "../index";

// const token = _store.getState().session.userAuth.token;
const token = '';
const client = new ApolloClient({
    uri: "http://18.191.182.230:5000",
    request: operation => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      });
    }
});

export default client;