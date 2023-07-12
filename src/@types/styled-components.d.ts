/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native';
import { Theme } from '~styles/constants';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
