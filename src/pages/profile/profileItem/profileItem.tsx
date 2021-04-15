import React, {useContext, useEffect} from 'react'
import {AdminPanel, UserPanel} from "../../../components";
import {ROUTERS, CONSTANTS} from "../../../config";
import {AuthContext} from "../../../context";

export const ProfileItem = ({infoUser}: any) => {

  const { userLogout, userSignIn, setUserInfo} = useContext(AuthContext);

  useEffect(()=>{
    userSignIn();
    setUserInfo(infoUser);
  }, []);

  const Logout = () => {
    userLogout();
    window.location.href = ROUTERS.homePage;
    localStorage.removeItem(CONSTANTS.ACCESS_TOKEN);
    localStorage.removeItem(CONSTANTS.REFRESH_TOKEN);
  };

  if(infoUser.role === CONSTANTS.ADMIN) {
    return <AdminPanel Logout={Logout}/>;
  }

  return (
    <div>
      <UserPanel Logout={Logout} infoUser={infoUser} />
    </div>
  )
};
