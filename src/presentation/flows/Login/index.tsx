import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import { Nav, routesNames } from '@constants/index';

import { colors } from '@styles/constants';

import { IFormLogin, defaultValues, fieldsLogin, schemaLogin } from './schema';
import {
  Container,
  Title,
  Wrapper,
  WrapperForm,
  SFeather,
  SLinearGradient,
  STextField,
  SButton,
  styles,
} from './styles';

export function Login() {
  const { navigate } = useNavigation<Nav>();

  const {
    control,
    handleSubmit,
    formState: { isValid },
    setValue,
    watch,
  } = useForm<IFormLogin>({ resolver: yupResolver<IFormLogin>(schemaLogin), defaultValues });

  const onSubmit = values => {
    console.log('values', values);
    navigate(routesNames.DASHBOARD);
  };

  return (
    <Container>
      <Wrapper>
        <SFeather name="user" size={40} />
        <Title>Login</Title>
        <WrapperForm>
          <STextField
            control={control}
            name={fieldsLogin.EMAIL}
            label="E-mail"
            placeholder="Digite seu e-mail"
            required
            variant="standard"
            styleTextLabel={styles.textLabel}
            styleTextInput={styles.textInput}
            placeholderTextColor={colors.GRAY_500}
          />
          <STextField
            control={control}
            name={fieldsLogin.PASSWORD}
            label="Senha"
            placeholder="Digite sua senha"
            required
            variant="standard"
            styleTextLabel={styles.textLabel}
            styleTextInput={styles.textInput}
            placeholderTextColor={colors.GRAY_500}
          />
          <SButton onPress={handleSubmit(onSubmit)}>Entrar</SButton>
        </WrapperForm>
      </Wrapper>

      <SLinearGradient colors={['#b0275a', '#9c27b0', '#4800ff']} start={[0, 1]} end={[1, 0]} />
    </Container>
  );
}
