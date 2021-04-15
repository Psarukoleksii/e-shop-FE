import React, {useContext, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {AuthContext} from "../../context";
import {Link} from 'react-router-dom';
import {ROUTERS} from "../../config";
import {useHeaderStyles} from "../../styles";
import {ModalWindow} from "../UI";
import {CategoriesList} from "../categoriesList";

export const Header = () => {
  const classes = useHeaderStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const {isLoginUser} = useContext(AuthContext);
  const menuId = 'primary-search-account-menu';

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{background: "#2b5329"}}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to={ROUTERS.homePage}>
              <img className={classes.titleImg}
                   src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dab60938212491.5968c68fa9113.gif'
                   alt="logo"/>
            </Link>
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpenModal}
          >
            Catalog
            <MenuIcon/>
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{'aria-label': 'search'}}
            />
          </div>
          <div className={classes.grow}/>
          <div>
            <IconButton
              className={classes.icoProfile}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Link
                to={isLoginUser ? ROUTERS.profile : ROUTERS.authorization}>
                <AccountCircle/>
              </Link>
            </IconButton>
          </div>
        </Toolbar>
        <ModalWindow openModal={openModal} setOpenModal={setOpenModal}>
          <CategoriesList setOpenModal={setOpenModal}/>
        </ModalWindow>
      </AppBar>
    </div>
  );
};
