import {AXIOS} from "../config";

class Authorization {
  signUp = async (user: any) => await AXIOS.post('/auth/register', user)

  signIn = async (user: any) => await AXIOS.post('/auth/login', user);
}

export const authorization = new Authorization();
