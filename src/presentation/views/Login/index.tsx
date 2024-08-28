import { Fragment } from 'react';

import { Formik } from 'formik';

import { BackButton } from '@components/BackButton/index.tsx';
import { CustomTextInput } from '@components/CustomTextInput';
import { IlusiaVideoView } from '@components/IlusiaVideoView';
import { FormButton } from '@presentation/shared/components/FormButton/index.tsx';

import { Props } from './props.ts';
import { useLogin } from './useLogin.ts';

export const Login = ({}: Props) => {
  const { formSchema, initialValues, onSubmit } = useLogin();

  return (
    <IlusiaVideoView>
      <BackButton />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, errors }) => (
          <Fragment>
            <CustomTextInput label="Correo electrónico*" name="email" />
            <CustomTextInput label="Contraseña*" name="password" />
            <FormButton
              disabled={Object.keys(errors).length > 0}
              handleSubmit={handleSubmit}
              label="Iniciar Sesión"
            />
          </Fragment>
        )}
      </Formik>
    </IlusiaVideoView>
  );
};
