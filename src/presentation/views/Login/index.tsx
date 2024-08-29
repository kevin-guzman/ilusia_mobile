import { Fragment } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Formik } from 'formik';

import { IlusiaTextAndIcon } from '@assets/icons/IlusiaTextAndIcon.tsx';
import { BackButton } from '@components/BackButton/index.tsx';
import { CustomTextInput } from '@components/CustomTextInput';
import { IlusiaVideoView } from '@components/IlusiaVideoView';
import { FormButton } from '@presentation/shared/components/FormButton/index.tsx';

import { Props } from './props.ts';
import { styles } from './styles.ts';
import { useLogin } from './useLogin.ts';

export const Login = ({}: Props) => {
  const { formSchema, initialValues, onSubmit } = useLogin();

  return (
    <IlusiaVideoView style={styles.container}>
      <BackButton />
      <IlusiaTextAndIcon style={styles.ilusiaIcon} />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Fragment>
            <CustomTextInput label="Correo electrónico*" name="email" />
            <CustomTextInput label="Contraseña*" name="password" />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>He olvidado mi contraseña</Text>
            </TouchableOpacity>
            <FormButton
              testID="login-submit-button"
              handleSubmit={handleSubmit}
              label="Iniciar Sesión"
            />
          </Fragment>
        )}
      </Formik>
      <View style={styles.termsAndConditions}>
        <Text style={styles.termsAndConditionsText}>
          Acepta nuestros Términos y Condiciones de uso y nuestra Política de Privacidad
        </Text>
      </View>
    </IlusiaVideoView>
  );
};
