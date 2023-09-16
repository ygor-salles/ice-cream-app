/* eslint-disable @typescript-eslint/no-explicit-any */
import { useController, Control } from 'react-hook-form';

import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';

import { Switch } from './styles';

interface SwitchToggleFieldProps {
  control: Control<any>;
  name: string;
}

export function SwitchToggleField({ name, control }: SwitchToggleFieldProps) {
  const {
    field: { value, onChange },
  } = useController({ control, name });

  const { themeName } = useThemeContext();

  const gray = themeName === 'light' ? colors.GRAY_600 : colors.GRAY_300;
  const purpple = themeName === 'light' ? colors.PURPLE_PRIMARY : colors.PURPLE_PRIMARY_DARK;
  const opacity =
    themeName === 'light' ? colors.PURPLE_PRIMARY_OPACITY : colors.PURPLE_PRIMARY_DARK_OPACITY;

  return (
    <Switch
      trackColor={{ false: gray, true: opacity }}
      thumbColor={value ? purpple : colors.WHITE}
      onValueChange={() => onChange((prev: boolean) => !prev)}
      value={value}
    />
  );
}
