import { Fragment } from 'react';
import { Button, Text } from 'react-native';

import { Formik } from 'formik';

import { CustomTextInput } from '@components/CustomTextInput';
import { IlusiaVideoView } from '@components/IlusiaVideoView';

import { Props } from './props.ts';
import { useLogin } from './useLogin.ts';

export const Login = ({}: Props) => {
  const { formSchema, initialValues, onSubmit } = useLogin();

  return (
    <IlusiaVideoView>
      <Text>Login</Text>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors }) => (
          <Fragment>
            <CustomTextInput name="email" />
            <CustomTextInput name="password" />
            <Button
              disabled={Object.keys(errors).length > 0}
              title="Login"
              onPress={() => handleSubmit()}
            ></Button>
          </Fragment>
        )}
      </Formik>
    </IlusiaVideoView>
  );
};
