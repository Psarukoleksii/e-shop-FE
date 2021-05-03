import React from 'react';
import {Box, Button, Typography} from '@material-ui/core';
import {IModalWindow} from "../../../interfaces";
import {ModalWindow} from "../../UI";
import {useDoOrder} from "../../../hooks";

interface IFinalOrder {
  setOpenModal: IModalWindow["setOpenModal"],
  openModal: IModalWindow["openModal"],
  wishList: any,
  userInformation: any,
}

export const Order: React.FC<IFinalOrder> = ({setOpenModal, openModal, wishList, userInformation }) => {
  const { handleDoOrder } = useDoOrder();

  return (
    <ModalWindow setOpenModal={setOpenModal} openModal={openModal}>
      <Box marginLeft={20} marginRight={20}>
        <Typography variant="h4" gutterBottom>
          Information about order
        </Typography>
        <Typography variant='h6' gutterBottom>
          Info about user
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          {userInformation.firstName} {userInformation.lastName}
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          {userInformation.email}
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          {userInformation.phone}
        </Typography>
        <Typography variant='h6' gutterBottom>
          Info about products
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          {
            wishList && wishList.map((value:any) => {
              return (
                <Box>
                  <Box>
                    {value.name}
                  </Box>
                  <Box borderBottom='1px solid black'>
                    {value.price * value.countInBasket} $ Count in basket: {value.countInBasket}
                  </Box>
                </Box>
              )
            })
          }
        </Typography>
        <Button variant="contained" color="primary" onClick={()=> handleDoOrder(wishList, userInformation)}>
          Confirm the order
        </Button>
      </Box>
    </ModalWindow>
  )
}
