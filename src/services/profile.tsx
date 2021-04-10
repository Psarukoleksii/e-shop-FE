import {AXIOS} from "../config";

class ProfileService {
  async profileDetails () {
    const { data } = await AXIOS.post('/auth/profile', {})
    return data;
  }
}

export const profileService = new ProfileService();
