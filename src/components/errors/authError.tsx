import React from 'react';
import {Link} from "react-router-dom";
import {CONSTANTS, ROUTERS} from "../../config";
import {ModalWindow} from "../UI";
import {IModalWindow} from "../../interfaces";

export const AuthError: React.FC<IModalWindow> = ({setOpenModal, openModal}: IModalWindow) => {

  return (
    <ModalWindow setOpenModal={setOpenModal} openModal={openModal}>
      <Link style={{color: "black"}} to={ROUTERS.authorization}>Sign
        in</Link> {CONSTANTS.errorMessages.signInForThisAction}
    </ModalWindow>
  )
}
