import React, {useState} from 'react';
import {SignIn} from "./signIn";
import {SignUp} from "./signUp";
import {CONSTANTS} from "../../config";

export const Authorization = () => {

  const [errorMessage, setErrorMessage] = useState<string>(CONSTANTS.EMPTY_STRING);
  const [authorization, setAuthorization] = useState<boolean>(false);

  const handleChangeAuth = () => {
    setAuthorization(prevState => !prevState)
  }

  if (authorization) {
    return <SignIn errorMessage={errorMessage} setErrorMessage={setErrorMessage} handleChangeAuth={handleChangeAuth}/>
  }

  return (
    <>
      <SignUp setErrorMessage={setErrorMessage} errorMessage={errorMessage} handleChangeAuth={handleChangeAuth}/>
    </>
  )
}
