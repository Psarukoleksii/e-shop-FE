import React, {useEffect} from 'react'
import {AdminPanel, UserPanel} from "../../../components";
import {ROUTERS} from "../../../config";
import {CONSTANTS} from "../../../config/constants";

export const ProfileItem = ({infoUser, context}: any) => {

  useEffect(()=>{
    context.userSignIn();
  }, [])

  const Logout = () => {
    context.userLogout();
    window.location.href = ROUTERS.homePage
    localStorage.removeItem(CONSTANTS.ACCESS_TOKEN);
    localStorage.removeItem(CONSTANTS.REFRESH_TOKEN);
  }

  if(infoUser.role === CONSTANTS.ADMIN) {
    return <AdminPanel Logout={Logout}/>
  }

  return (
    <div>
      <UserPanel Logout={Logout} infoUser={infoUser} />
    </div>
  )
}
