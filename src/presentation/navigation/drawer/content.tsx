import { Text, TouchableOpacity, Vibration, View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import { contentElement, contentList } from './screens';
import { styles } from './styles';

export const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  const { navigate } = navigation;

  const renderItem = (item: contentElement) => (
    <TouchableOpacity
      key={item.navigation}
      onPress={() => navigate(item.navigation)}
      style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {contentList.map(renderItem)}
    </View>
  );
};
