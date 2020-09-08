import React from 'react';
import {useColorScheme} from 'react-native';

import {useSelector, Selector, useDispatch} from 'react-redux';

import {LightTheme} from '@resources';
import {ThemeConfig} from '@core';
import {RootStoreState, setTheme} from '@shared-state';

export const themeSelector: Selector<RootStoreState, ThemeConfig> = ({
  configuration: {themeConfig},
}) => themeConfig;

export function useTheme() {
  const themeConfig = useSelector(themeSelector);
  const systemColorScheme = useColorScheme();
  if (themeConfig === ThemeConfig.Dark) {
    return LightTheme;
  }
  if (themeConfig === ThemeConfig.System) {
    if (systemColorScheme === 'dark') {
      return LightTheme;
    }
  }
  return LightTheme;
}

/**
 * hook to theme state
 * @return Theme state and function to set theme
 */
export function useThemeWithSetter() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const dispatchTheme = React.useCallback(
    (config: ThemeConfig) => {
      dispatch(setTheme(config));
    },
    [dispatch],
  );
  return [theme, dispatchTheme];
}
