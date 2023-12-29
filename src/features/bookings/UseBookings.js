import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function UseBookings() {
  const [searchParam] = useSearchParams();

  const filterValue = searchParam.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { feild: 'status', value: filterValue };

  const sortValue = searchParam.get('sortBy') || 'startDate-desc';
  const [feild, direction] = sortValue.split('-');
  const sortBy = { feild, direction };

  const {
    data: bookings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { bookings, error, isLoading };
}
