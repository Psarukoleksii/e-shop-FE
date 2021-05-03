import React from "react";

export interface IModalWindow {
  setOpenModal(openModal: boolean): void
  openModal: boolean;
  children?: React.ReactNode
}
