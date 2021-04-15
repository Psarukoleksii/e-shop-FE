import React from 'react';
import {ProfileItem} from "./profileItem";
import {useUserData} from "../../hooks";
import {Loading} from "../../components";

export const Profile = () => {
  const {loading, infoUser} = useUserData();

  if (loading) {
    return <Loading/>
  }

  return (
    <ProfileItem infoUser={infoUser}/>
  )
}
