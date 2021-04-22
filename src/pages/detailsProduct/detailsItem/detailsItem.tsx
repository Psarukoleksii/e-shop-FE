import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {CommentsForm} from "../commentForm";
import {CommentsList, RateProduct} from "../../../components";
import {useAddComment} from "../../../hooks";
import {DetailsInfoProduct} from "../detailsInfoProduct";
import {IProductInfo} from "../../../interfaces";
import translate from "../../../i18n/translate";

type DetailsItemsProps = {
  items: IProductInfo;
}

export const DetailsItem: React.FC<DetailsItemsProps> = ({items}:DetailsItemsProps) => {
  const { loading, comments, handleMoreComments, success, formik, openModal, setOpenModal } = useAddComment();

  return (
    <Grid container direction="column">
      <DetailsInfoProduct items={items} />
      <Grid container>
        <Grid xs={12}>
          <RateProduct />
        </Grid>
        <Grid xs={6}>
           <CommentsForm formik={formik} setOpenModal={setOpenModal} openModal={openModal} success={success}/>
        </Grid>
        <Grid xs={6}>
            <Typography variant="h5" gutterBottom>
              {translate("commentsList")}
            </Typography>
            <CommentsList loading={loading} comments={comments} handleMoreComments={handleMoreComments}/>
        </Grid>
      </Grid>
    </Grid>
  )
};
