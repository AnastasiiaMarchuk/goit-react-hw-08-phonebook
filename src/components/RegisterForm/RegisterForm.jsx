import { useDispatch } from 'react-redux';
import { register as registerUser } from 'redux/auth/operations';
import { Container, Form, Mess, Span, Title } from './RegisterForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthNav } from 'components/AuthNav/AuthNav';

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
      .required(),
    password: yup
      .string()
      .matches(/^[0-9]{8}$/)
      .required(),
  })
  .required();

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(registerUser(data));
    reset();
  };

  return (
    <Container>
      <AuthNav />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign Up</Title>
        <p>Please enter your Name, Email, and Password</p>

        <label>
          Username*
          <input {...register('name')} type="text" />
          {errors.name && <span>Name is required</span>}
        </label>

        <label>
          Email*
          <input {...register('email')} type="email" />
          {errors.email && <span>Email is required</span>}
        </label>

        <label>
          Password*
          <input
            {...register('password')}
            placeholder="Enter 8 numbers"
            type="password"
          />
          {errors.password && <span>Password must be exactly 8 numbers</span>}
        </label>
        <button type="submit">Register</button>
        <ToastContainer />
      </Form>
    </Container>
  );
};
