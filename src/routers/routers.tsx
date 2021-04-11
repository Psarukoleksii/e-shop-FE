import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Authorization, CategoryWithProducts, Home, Profile} from "../pages";
import {ROUTERS} from "../config";

export const Routers = () => {
  return (
    <Switch>
      <Route path={ROUTERS.homePage} exact>
        <Home/>
      </Route>
      <Route path={ROUTERS.authorization}>
        <Authorization/>
      </Route>
      <Route path={ROUTERS.profile}>
        <Profile/>
      </Route>
      <Route path={`${ROUTERS.categories}${ROUTERS.dynamicVars.name}`}>
        <CategoryWithProducts />
      </Route>
    </Switch>
  )
}
