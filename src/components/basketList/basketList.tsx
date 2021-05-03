import React from 'react';
import {BasketItems} from "./basketItems";
import {Button} from "@material-ui/core";
import {FormikProvider} from "formik";
import {useDefinitionOrder} from "../../hooks";
import {CONSTANTS, BUTTON} from "../../config";
import {IBasketProducts, IProductInfo} from "../../interfaces";
import {EmptyBasket} from "./emptyBasket";
import {AuthError} from "../errors";
import {Order} from "./order";

export const BasketList: React.FC<IBasketProducts> = ({products, handleDeleteProductFromBasket}: IBasketProducts) => {
  const {formik, loginError, setOpenModal, openModal, wishList, userInformation} = useDefinitionOrder(products);

  if(!products.length) return <EmptyBasket/>

  return (
    <FormikProvider value={formik}>
      <form action={CONSTANTS.form.POST} onSubmit={formik.handleSubmit}>
        {
          products && products.map((value: IProductInfo, index: number) => <BasketItems key={index} items={value}
                                                                                        formik={formik}
                                                                                        handleDeleteProductFromBasket={handleDeleteProductFromBasket}/>)
        }
        <Button variant="contained" color="primary" type={BUTTON.SUBMIT}>Buy</Button>
      </form>
      {loginError && <AuthError setOpenModal={setOpenModal} openModal={openModal} />}
      {!loginError && <Order setOpenModal={setOpenModal} openModal={openModal} wishList={wishList} userInformation={userInformation}/>}
    </FormikProvider>
  )
}
