import React from 'react';
import {Footer, Header} from "../components";

export const BaseLayout = ({children}:any) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
