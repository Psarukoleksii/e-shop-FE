import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


export const useStylesPagination = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
