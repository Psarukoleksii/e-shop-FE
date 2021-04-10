import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
// import Link from '@material-ui/core/Link';
import {AuthConsumer} from "../../context";
import {ROUTERS} from "../../config";

export const Header = () => {

  const useStyles = makeStyles(() => ({
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    link: {
      width: '2%'
    },
    img: {
      width: '100%'
    }
  }));

  const classes = useStyles();

  // @ts-ignore
  return (
    <div className={classes.header}>
      <Link to={ROUTERS.homePage}><img src='https://static-sl.insales.ru/files/1/1171/14550163/original/markom_logo.svg' alt="logo"/></Link>
      <AuthConsumer>
        {
          content => (
            <>
              {content.isLoginUser ?
                <Link className={classes.link} to={ROUTERS.profile}><img className={classes.img}
                                                                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhYhRYXrrS3OGaE4hCHZCQh99kuca9aBHCg&usqp=CAU'
                                                                 alt=""/></Link>
                :
                <Link className={classes.link} to={ROUTERS.authorization}><img className={classes.img}
                                                                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhYhRYXrrS3OGaE4hCHZCQh99kuca9aBHCg&usqp=CAU'
                                                                          alt=""/></Link>
              }
            </>
          )
        }
      </AuthConsumer>
    </div>

  )
}
