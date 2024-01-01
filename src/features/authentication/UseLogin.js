import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoadingLogin } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(['user'], user.user);
      toast.success('Login succesful');
      navigate('/dashboard', { replace: true });
    },
    onError: (error) => {
      toast.error('Provided email or password is incorrect');
      console.log(error);
    },
  });
  return {
    login,
    isLoadingLogin,
  };
}
