import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {useHeaderStyles} from "../../../styles";
import {ModalWindow} from "../../UI";
import {CategoriesList} from "../../categoriesList";
import translate from "../../../i18n/translate";

export const Catalog = () => {
  const classes = useHeaderStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={handleOpenModal}
      >
        {translate("catalog")}
        <MenuIcon/>
      </IconButton>
      <ModalWindow openModal={openModal} setOpenModal={setOpenModal}>
        <CategoriesList setOpenModal={setOpenModal}/>
      </ModalWindow>
    </>
  )
}
