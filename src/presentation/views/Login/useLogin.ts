import { InferType, object, string } from 'yup';

export const useLogin = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const formSchema = object({
    email: string().email('Email inválido').required('El email es requerido'),
    password: string().required('La contraseña es requerida'),
  });

  const onSubmit = (values: InferType<typeof formSchema>) => {
    console.log('values', values);
  };

  return { initialValues, formSchema, onSubmit };
};
