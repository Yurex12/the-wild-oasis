import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRowVertical from '../../ui/FormRowVertical';
import { login } from '../../services/apiAuth';
import { useLogin } from './UseLogin';
import SpinnerMini from '../../ui/SpinnerMini';
import toast from 'react-hot-toast';

function LoginForm() {
  const [email, setEmail] = useState('yusuf@example.com');
  const [password, setPassword] = useState('Adeyemi17');

  const { login, isLoadingLogin } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Input fields cannot be empty');
      return;
    }

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label='Email address'>
        <Input
          type='email'
          id='email'
          // This makes this form better for password managers
          autoComplete='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoadingLogin}
        />
      </FormRowVertical>
      <FormRowVertical label='Password'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoadingLogin}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size='large' disabled={isLoadingLogin}>
          {isLoadingLogin ? <SpinnerMini /> : 'Login'}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
