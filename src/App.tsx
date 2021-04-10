import React from 'react';
import {BaseLayout} from "./layouts";
import {Routers} from "./routers";
import './App.css';

export const App = () => {
  return (
    <div>
      <BaseLayout>
        <Routers />
      </BaseLayout>
    </div>
  )
}
