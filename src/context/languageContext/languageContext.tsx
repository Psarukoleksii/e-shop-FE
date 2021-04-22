import React, {useReducer} from 'react';
import {SET_LANGUAGE_ENGLISH, SET_LANGUAGE_UKRAINE} from "../actionType";
import {LOCALES} from "../../i18n";

const LanguageContext = React.createContext({
  language: LOCALES.ENGLISH,
  handleSetLanguageEnglish: () => {},
  handleSetLanguageUkraine: () => {}
});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_LANGUAGE_ENGLISH: {
      return {...state, language: LOCALES.ENGLISH};
    }
    case SET_LANGUAGE_UKRAINE: {
      return {...state, language: LOCALES.UKRAINE};
    }
    default : {
      return state;
    }
  }
};

const LanguageProvider = ({children}: any) => {
  // @ts-ignore
  const [{language}, dispatch] = useReducer<any>(reducer,
    {language: LOCALES.ENGLISH});

  const handleSetLanguageEnglish = () => {
    // @ts-ignore
    dispatch({
      type: SET_LANGUAGE_ENGLISH,
    })
  };

  const handleSetLanguageUkraine = () => {
    // @ts-ignore
    dispatch({
      type: SET_LANGUAGE_UKRAINE
    })
  }

  const providerValues = {
    handleSetLanguageEnglish,
    handleSetLanguageUkraine,
    language
  };

  return <LanguageContext.Provider value={providerValues}>{children}</LanguageContext.Provider>
}

export {LanguageProvider, LanguageContext};
