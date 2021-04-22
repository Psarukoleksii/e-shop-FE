import React, {useContext} from 'react';
import {BaseLayout} from "./layouts";
import {Routers} from "./routers";
import {I18NProvider} from "./i18n";
import {LanguageContext} from "./context";

export const App = () => {
  const { language } = useContext(LanguageContext);

  return (
    <I18NProvider locale={language}>
      <BaseLayout>
        <Routers/>
      </BaseLayout>
    </I18NProvider>
  )
}
