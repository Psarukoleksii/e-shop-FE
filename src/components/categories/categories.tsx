import React from 'react';
import {useSubCategories} from "../../hooks";
import {Loading} from "../loading";
import {Link} from 'react-router-dom';
import {ROUTERS} from "../../config";

export const Categories = () => {
  const { loading, subCategoriesList, name } = useSubCategories();

  if (loading) return <Loading />

  return (
    <div>
      {
        subCategoriesList.map((value:any, index: number)=>{
          return (
            <div key={index}>
              <Link style={{color: "black"}} to={`${ROUTERS.categories}/${name}/${value.subCategory}`}>
                {value.subCategory}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
