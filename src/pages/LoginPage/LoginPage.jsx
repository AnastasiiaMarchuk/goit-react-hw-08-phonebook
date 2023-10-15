import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <main>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </main>
  );
}
