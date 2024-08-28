import { ViewStyle } from 'react-native';

export type Props = {
  handleSubmit: () => void;
  customPressHandler?: () => void;
  disabled?: boolean;
  label: string;
  style?: ViewStyle;
};
