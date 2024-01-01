import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { signUp as signupApi } from '../../services/apiAuth';

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        'Account sucessfully created, kindly check your email adderess'
      );
      //  navigate('/login');
    },
    onError: (error) => {
      console.log(error);
      toast.error('Something went wrong');
    },
  });
  return { signup, isPending };
}
