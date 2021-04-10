import React, {useState} from 'react';
import {SignIn} from "./signIn";
import {SignUp} from "./signUp";

export const Authorization = () => {

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [authorization, setAuthorization] = useState<boolean>(false);

  const handleChangeAuth = () => {
    setAuthorization(prevState => !prevState)
  }

  return (
    <>
      {
        authorization ?
          <SignIn errorMessage={errorMessage} setErrorMessage={setErrorMessage} handleChangeAuth={handleChangeAuth}/> :
          <SignUp setErrorMessage={setErrorMessage} errorMessage={errorMessage} handleChangeAuth={handleChangeAuth}/>
      }
    </>
  )
}
