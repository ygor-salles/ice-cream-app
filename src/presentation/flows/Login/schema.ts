import * as yup from 'yup';

export interface IFormLogin {
  email: string;
  password: string;
}

export const fieldsLogin = {
  EMAIL: 'email',
  PASSWORD: 'password',
};

export const defaultValues: IFormLogin = {
  email: '',
  password: '',
};

export const schemaLogin = yup.object().shape({
  email: yup.string().required('obrigatório'),
  password: yup.string().required('obrigatório'),
});
