import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Authorization, CategoryWithProducts, DetailsProduct, Home, Profile} from "../pages";
import {ROUTERS} from "../config";
import {ProductsListLayout} from "../layouts/productsListLayout";
import {Categories, SubCategoryWithProducts} from "../components";

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
        <ProductsListLayout>
          <Categories />
          <CategoryWithProducts/>
        </ProductsListLayout>
      </Route>
      <Route path={`${ROUTERS.categories}${ROUTERS.dynamicVars.name}${ROUTERS.dynamicVars.subName}`} exact>
        <ProductsListLayout>
          <SubCategoryWithProducts />
        </ProductsListLayout>
      </Route>
      <Route path={`${ROUTERS.products}${ROUTERS.dynamicVars.id}`} exact>
        <DetailsProduct/>
      </Route>
    </Switch>
  )
}
