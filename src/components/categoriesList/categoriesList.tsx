import React from 'react';
import {useGetAllCategories} from "../../hooks";
import {Loading} from "../loading";
import {Link} from 'react-router-dom';
import {ROUTERS} from "../../config";

export const CategoriesList = ({setOpenModal}: any) => {
  const {allCategories, loading} = useGetAllCategories();

  if (loading) return <Loading/>;

  return (
    <>
      {
        allCategories.map((value: any, index: number) => {
          return (
            <div key={index}>
              <Link style={{color: "black"}} onClick={() => setOpenModal(false)}
                    to={`${ROUTERS.categories}/${value.category}`}>{value.category}</Link>
              {
                value.subCategory.map((items: any, index: number) => {
                  return (
                    <div key={index}>
                      <Link style={{color: "black"}} onClick={() => setOpenModal(false)}
                            to={`${ROUTERS.categories}/${value.category}/${items.subCategory}`}>
                        {items.subCategory}
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </>
  )
};
