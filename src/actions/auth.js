import { createAction, getActionType } from "./utils";
import gql from "graphql-tag";

const prefix = "action.auth";
export const UPDATE_AUTH = getActionType(prefix)("UPDATE_AUTH");
export const UPDATE_USER = getActionType(prefix)("UPDATE_USER");
export const REMOVE_AUTH = getActionType(prefix)("REMOVE_AUTH");

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        first_name
        last_name
      }
    }
  }
`;

export const login = (data) => dispatch => {
  return dispatch(createAction(UPDATE_AUTH, data.login));
};

export const logoutAuth = () => dispatch => {
  localStorage.clear();
  dispatch(createAction(REMOVE_AUTH, {}));
};
