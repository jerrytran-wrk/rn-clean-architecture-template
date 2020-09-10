import {createAction} from '@reduxjs/toolkit';
import {ThemeConfig} from '@core';

export const setTheme = createAction<ThemeConfig>('configuration/setTheme');
export const setThemeSuccess = createAction('configuration/setThemeSuccess');
export const setThemeFailed = createAction('configuration/setThemeFailed');

export type SetTheme = ReturnType<typeof setTheme>;
export type SetThemeSuccess = ReturnType<typeof setThemeSuccess>;
export type SetThemeFailed = ReturnType<typeof setThemeFailed>;

export type ConfigurationEpicActions =
  | SetTheme
  | SetThemeSuccess
  | SetThemeFailed;
