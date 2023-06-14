import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button, TextField } from '@components/index';

import { IFormLogin, defaultValues, fieldsLogin, schemaLogin } from './schema';
import { Container, SCard, SText, WrapperForm } from './styles';

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    setValue,
    watch,
  } = useForm<IFormLogin>({ resolver: yupResolver<IFormLogin>(schemaLogin), defaultValues });

  const onSubmit = values => console.log('values', values);

  return (
    <Container>
      <SCard>
        <SText>Login</SText>
        <WrapperForm>
          <TextField
            control={control}
            name={fieldsLogin.EMAIL}
            label="E-mail"
            placeholder="Digite seu e-mail"
            required
            variant="standard"
          />
          <TextField
            control={control}
            name={fieldsLogin.PASSWORD}
            label="Senha"
            placeholder="Digite sua senha"
            required
            variant="standard"
          />
        </WrapperForm>
        <Button onPress={handleSubmit(onSubmit)}>Entrar</Button>
      </SCard>
    </Container>
  );
}
