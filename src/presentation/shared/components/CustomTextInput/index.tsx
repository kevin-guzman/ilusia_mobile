import { useMemo } from 'react';
import { Text, View, TextInput } from 'react-native';
import { useField } from 'formik';

import { styles } from './styles';
import { Props } from './props.ts';

export const CustomTextInput = ({ name }: Props) => {
  const [meta, field, helpers] = useField(name);
  const { onBlur, value } = meta;
  const { touched, error } = field;
  const { setValue } = helpers;

  const hasError = useMemo(() => error && touched, [error, touched]);

  return (
    <View style={styles.container} >
      <TextInput
        testID={name}
        onBlur={() => {
          // setTouched(true)
          onBlur(name)
        }}
        onPressIn={() => {
          // setTouched(true)
        }}
        placeholder={name}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      {hasError && <Text style={styles.errorText} >Error: {error}</Text>}
    </View>
  );
};




