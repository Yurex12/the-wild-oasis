import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';

export function UseBookings() {
  const [searchParam] = UseBookings();
  const {
    data: bookings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings,
  });

  return [bookings, error, isLoading];
}
