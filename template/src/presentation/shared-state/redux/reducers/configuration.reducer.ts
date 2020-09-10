import {createReducer} from '@reduxjs/toolkit';

import {ThemeConfig} from '@core';

import {setTheme} from '../actions';

export type ConfigurationState = {
  themeConfig: ThemeConfig;
};

const INITIAL_STATE: ConfigurationState = {
  themeConfig: ThemeConfig.System,
};

export const configurationReducer = createReducer(INITIAL_STATE, (builder) =>
  builder.addCase(setTheme, (state, {payload: themeConfig}) =>
    Object.assign(state, {themeConfig}),
  ),
);
