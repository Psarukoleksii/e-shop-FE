import React from 'react';

export const UserPanel = ({infoUser, Logout}: any) => {
  return (
    <div>
      <h2>{infoUser.firstName} {infoUser.lastName}</h2>
      <h4>Phone: {infoUser.phone}</h4>
      <h4>Email: {infoUser.email}</h4>
      <button onClick={()=> Logout()}>Logout</button>
    </div>
  )
}
