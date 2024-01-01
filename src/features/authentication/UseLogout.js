import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as loginApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success('Logout succesful');
      navigate('/login', { replace: true });
      queryClient.removeQueries();
    },
    onError: () => {
      toast.error('Error while logging out');
    },
  });

  return { logout, isPending };
}
