import { useForm } from 'react-hook-form';
import { StatusBar } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { LinearGradient } from 'expo-linear-gradient';

import { Button, TextField } from '@components/index';

import { colors } from '@styles/constants';

import { IFormLogin, defaultValues, fieldsLogin, schemaLogin } from './schema';
import { Container, SCard, SText, Wrapper, WrapperForm, styles } from './styles';

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
      <Wrapper>
        <StatusBar backgroundColor={colors.DARK_200} barStyle="default" showHideTransition="fade" />

        <Feather name="user" size={40} style={styles.icon} />
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
      </Wrapper>

      <LinearGradient
        colors={['#b0275a', '#9c27b0', '#4800ff']}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.gradient}
      />
    </Container>
  );
}
