import {IUser} from "./user";
import {IModalWindow} from "./modalWindow";

export interface ICommentItem {
  _id: string;
  user_id: string;
  product_id: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  user: IUser[]
}

export interface ICommentsList {
  loading: boolean;
  comments: ICommentItem[];
  handleMoreComments(): void;
}

export interface ICommentForm {
  formik: any;
  openModal: boolean;
  success: boolean;
  setOpenModal(openModal: boolean): void
}
