import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';


import Logo from '../../assets/logo-login.svg'
import { Button } from '../../components/Button';
import { api } from '../../services/api';

import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';


export function Login() {

  const schema = yup.object({
    email: yup.string().email('email is a required field').required(),
    password: yup.string().min(6, 'Password must have six caracteres').required(),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Checking your data',
        success: 'Welcome👌',
        error: 'Make sure your email or password are correct 🤯',
      }
    );
    console.log(response);
  }


  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt='logo-devburger' />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type='email' {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Password</label>
            <input type='password' {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type='submit'>Login</Button>
        </Form>
        <p> Don't have an account?
          <a> Click here.</a>
        </p>
      </RightContainer>

    </Container>
  )
};