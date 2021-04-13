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
        allCategories.data.map((value: string) => {
          return (
            <div>
              <Link style={{color: "black"}} onClick={() => setOpenModal(false)} to={`${ROUTERS.categories}/${value}`}>
                {value}
              </Link>
            </div>
          )
        })
      }
    </>
  )
};
