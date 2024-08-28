import { InferType, object, string } from 'yup';

export const useLogin = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const formSchema = object({
    email: string().email().required('Email is required'),
    password: string().required('Password is required'),
  });

  const onSubmit = (values: InferType<typeof formSchema>) => {
    console.log('values', values);
  };

  return { initialValues, formSchema, onSubmit };
};
