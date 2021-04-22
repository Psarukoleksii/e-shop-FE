import React, {useContext, useEffect, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import TranslateIcon from '@material-ui/icons/Translate';
import {CONSTANTS} from "../../../config";
import {LanguageContext} from "../../../context";
import {useChooseLanguageStyles} from "../../../styles/chooseLanguage";

export const Language = () => {
  const classes = useChooseLanguageStyles();
  const [language, setLanguage] = useState<string>(CONSTANTS.EMPTY_STRING);
  const { handleSetLanguageUkraine, handleSetLanguageEnglish } = useContext(LanguageContext);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string);
  };

  useEffect(()=>{
    if(language === CONSTANTS.language.ENGLISH){
      handleSetLanguageEnglish()
    }
    if(language === CONSTANTS.language.UKRAINE){
      handleSetLanguageUkraine()
    } else {
      return ;
    }
  }, [language])

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label" className={classes.inputLabel}><TranslateIcon />Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        onChange={handleChange}
        className={classes.selectOption}
      >
        <MenuItem value={CONSTANTS.language.ENGLISH}>ENGLISH</MenuItem>
        <MenuItem value={CONSTANTS.language.UKRAINE}>УКРАЇНСЬКА</MenuItem>
      </Select>
    </FormControl>
  )
}
