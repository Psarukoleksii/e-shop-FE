import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Authorization, CategoryWithProducts, DetailsProduct, Home, Profile} from "../pages";
import {ROUTERS} from "../config";
import {ProductsConsumer} from "../context";

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
      <Route path={`${ROUTERS.categories}${ROUTERS.dynamicVars.name}`} exact>
        <ProductsConsumer>
          {
            (context:any) => <CategoryWithProducts context={context}/>
          }
        </ProductsConsumer>
      </Route>
      <Route path={`${ROUTERS.categories}${ROUTERS.dynamicVars.name}${ROUTERS.dynamicVars.id}`} exact>
        <ProductsConsumer>
          {
            (context: any) => <DetailsProduct context={context} />
          }
        </ProductsConsumer>
      </Route>
    </Switch>
  )
}
