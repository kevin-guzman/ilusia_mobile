import { Fragment } from "react";
import { Text, Button } from 'react-native';
import { Formik } from "formik";
import { useLogin } from "./useLogin.ts";

import { CustomTextInput } from "@presentation/shared/components/CustomTextInput";
import { IlusiaVideoView } from "@presentation/shared/components/IlusiaVideoView";

import { styles } from './styles.ts';
import { Props } from './props.ts';

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
        {({ handleSubmit, submitForm, values, errors,  }) => (
          <Fragment>
            <CustomTextInput name="email" />
            <CustomTextInput name="password" />
            <Button disabled={Object.keys(errors).length > 0} title="Login" onPress={()=>handleSubmit()} ></Button>
          </Fragment>
        )}
      </Formik>
    </IlusiaVideoView>
  );
};

