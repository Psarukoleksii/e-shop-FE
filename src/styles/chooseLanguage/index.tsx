import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useChooseLanguageStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginBottom: theme.spacing(2),
      minWidth: 130,
      marginRight: theme.spacing(2),
    },
    selectEmpty: {
      color: "white",
      marginTop: theme.spacing(2),
    },
    inputLabel: {
      color: "white",
      display: "flex",
      alignItems: "center",
    },
    selectOption: {
      color: "white"
    }
  }),
);
