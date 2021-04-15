import React, {useReducer} from 'react';
import {SET_USER_INFO, USER_ALREADY_LOGOUT, USER_ALREADY_SIGN_IN} from "./actionType";

const AuthContext = React.createContext({
  isLoginUser: false,
  userInformation: {},
  userSignIn: () => {
  },
  userLogout: () => {
  },
  setUserInfo: (infoUser: any) => {

  }
});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_USER_INFO : {
      return {...state, userInformation: action.payload}
    }
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

const AuthProvider = ({children}: any) => {
  // @ts-ignore
  const [{isLoginUser, userInformation}, dispatch] = useReducer<any>(reducer, {
    isLoginUser: false,
    userInformation: {}
  });

  const userSignIn = () => {
    // @ts-ignore
    dispatch({type: USER_ALREADY_SIGN_IN});
  };

  const userLogout = () => {
    // @ts-ignore
    dispatch({type: USER_ALREADY_LOGOUT});
  };

  const setUserInfo = (user: any) => {
    // @ts-ignore
    dispatch({
      type: SET_USER_INFO,
      payload: user,
    })
  }

  const values = {
    isLoginUser,
    userLogout,
    userSignIn,
    userInformation,
    setUserInfo
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export {AuthProvider, AuthContext};
