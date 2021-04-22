import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useModalWindowStyles} from "../../../styles";
import { IModalWindow } from '../../../interfaces'

export const ModalWindow: React.FC<IModalWindow> = ({openModal, children, setOpenModal}: IModalWindow) => {
  const classes = useModalWindowStyles();

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <div className={classes.paper}>
          {children}
        </div>
      </Fade>
    </Modal>
  )
}
