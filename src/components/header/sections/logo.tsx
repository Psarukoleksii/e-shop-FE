import React from 'react';
import {Link} from "react-router-dom";
import {ROUTERS} from "../../../config";

export const Logo = () => {
  return (
    <Link to={ROUTERS.homePage}>
      Logo
    </Link>
  )
}
