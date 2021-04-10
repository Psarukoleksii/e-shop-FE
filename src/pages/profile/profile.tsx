import React from 'react';
import {ProfileItem} from "./profileItem";
import {AuthConsumer} from "../../context";
import {useUserData} from "../../hooks";
import {Loading} from "../../components";

export const Profile = () => {
  const { loading, infoUser } = useUserData();

  if ( loading ) {
    return <Loading/>
  }

  return (
    <AuthConsumer>
      {
        context => (
          <div>
            {infoUser && <ProfileItem infoUser={infoUser} context={context}/>}
          </div>
        )
      }
    </AuthConsumer>

  )
}
