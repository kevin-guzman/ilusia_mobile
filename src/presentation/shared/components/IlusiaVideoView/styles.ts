import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  video: {
    width: '100%',
    height,
    position: 'absolute',
  },
});
