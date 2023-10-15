import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Span, Title, Container } from './LoginForm.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <Container>
      <AuthNav />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>
        <Span>Please enter your Login and Password</Span>

        <label>
          Email
          <input
            {...register('email', { required: true })}
            type="email"
            autoComplete="off"
          />
        </label>

        <label>
          Password
          <input
            {...register('password', { required: true })}
            type="password"
            autoComplete="off"
          />
        </label>

        <button type="submit">Login</button>
      </Form>
    </Container>
  );
};
