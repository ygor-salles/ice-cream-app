import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import { buttonThemes } from '~constants/ButtonThemes';
import { routesNames } from '~constants/RoutesNames';
import { colors } from '~styles/constants';
import { NavDrawer } from '~types/index';

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
  const { navigate } = useNavigation<NavDrawer>();

  const {
    control,
    handleSubmit,
    formState: { isValid },
    setValue,
    watch,
  } = useForm<IFormLogin>({ resolver: yupResolver<IFormLogin>(schemaLogin), defaultValues });

  const onSubmit = values => {
    console.log('values', values);
    navigate(routesNames.DRAWER);
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
            keyboardType="email-address"
            styleTextLabel={styles.textLabel}
            styleTextInput={styles.textInput}
            placeholderTextColor={colors.GRAY_300}
          />
          <STextField
            control={control}
            name={fieldsLogin.PASSWORD}
            label="Senha"
            placeholder="Digite sua senha"
            required
            variant="standard"
            typePassword
            lightEyeIcon
            styleTextLabel={styles.textLabel}
            styleTextInput={styles.textInput}
            placeholderTextColor={colors.GRAY_300}
          />
          <SButton themeButton={buttonThemes.WHITE} onPress={handleSubmit(onSubmit)}>
            Entrar
          </SButton>
        </WrapperForm>
      </Wrapper>

      <SLinearGradient colors={['#b0275a', '#9c27b0', '#4800ff']} start={[0, 1]} end={[1, 0]} />
    </Container>
  );
}
