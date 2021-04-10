import React, {useReducer} from 'react';
import {USER_ALREADY_LOGOUT, USER_ALREADY_SIGN_IN} from "./actionType";

const { Provider, Consumer } = React.createContext({
  isLoginUser: false,
  userSignIn: () => {},
  userLogout: () => {}
});

const reducer = (state: any, action: any) => {
  switch (action.type){
    case USER_ALREADY_SIGN_IN : {
      return {...state, isLoginUser: true}
    }
    case USER_ALREADY_LOGOUT : {
      return {...state, isLoginUser: false}
    }
    default : {
      return state;
    }
  }
};

const AuthProvider = ({ children }: any) => {
  // @ts-ignore
  const [{isLoginUser}, dispatch] = useReducer<any>(reducer, {isLoginUser: false});

  const userSignIn = () => {
    // @ts-ignore
    dispatch({type: USER_ALREADY_SIGN_IN});
  }

  const userLogout = () => {
    // @ts-ignore
    dispatch({type: USER_ALREADY_LOGOUT});
  }
  console.log(isLoginUser);
  return <Provider value={{isLoginUser, userLogout, userSignIn}}>{children}</Provider>
}

export { AuthProvider, Consumer as AuthConsumer };
