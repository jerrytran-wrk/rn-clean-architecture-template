import {TextTheme} from './TextTheme';
import {ColorScheme} from './ColorScheme';

export enum ThemeConfig {
  Dark,
  Light,
  System,
}

export interface Theme {
  textTheme?: TextTheme;
  colorScheme: ColorScheme;
}
