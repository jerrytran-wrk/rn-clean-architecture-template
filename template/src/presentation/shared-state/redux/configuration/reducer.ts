import {ConfigurationState} from './type';
import {createReducer} from '@reduxjs/toolkit';
import {setTheme} from './action';
import {ThemeConfig} from '@core';

const INITIAL_STATE: ConfigurationState = {
  themeConfig: ThemeConfig.System,
};

export const configurationReducer = createReducer(INITIAL_STATE, (builder) =>
  builder.addCase(setTheme, (state, {payload: themeConfig}) =>
    Object.assign(state, {themeConfig}),
  ),
);
