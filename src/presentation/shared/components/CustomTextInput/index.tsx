import { useMemo } from 'react';
import { Text, TextInput, View } from 'react-native';

import { useField } from 'formik';

import { Props } from './props.ts';
import { styles } from './styles';

export const CustomTextInput = ({ name, label }: Props) => {
  const [meta, field, helpers] = useField(name);
  const { onBlur, value } = meta;
  const { touched, error } = field;
  const { setValue } = helpers;

  const hasError = useMemo(() => error && touched, [error, touched]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          testID={name}
          onBlur={() => {
            onBlur(name);
          }}
          placeholderTextColor={'white'}
          cursorColor={'white'}
          style={styles.textInput}
          placeholder={label}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </View>
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
