import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function UseCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: checkin,
    isPending: isCheckingIn,
    error,
  } = useMutation({
    mutationFn: (bookingId) =>
      checkin(bookingId, {
        status: 'checked-in',
        isPaid: true,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} sucessfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },

    onError: () => {
      toast.error('There was an error while checking in');
    },
  });

  return { checkin, isCheckingIn, error };
}
