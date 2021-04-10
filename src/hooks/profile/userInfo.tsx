import React, {useEffect, useState} from 'react';
import {profileService} from "../../services";

export const useUserData = () => {
  const [infoUser, setInfoUser] = useState<object>();
  const [loading, setLoading] = useState<boolean>(true);

  const handleGetUserData = async () => {
    const info = await profileService.profileDetails();
    setInfoUser(info);
    setLoading(false)
  }

  useEffect(()=>{
    handleGetUserData();
  }, [])

  return {infoUser, loading}
}
