import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import ButtonIcon from '../../ui/ButtonIcon';
import { useLogout } from './UseLogout';
import SpinnerMini from '../../ui/SpinnerMini';

function LogoutForm() {
  const { logout, isPending } = useLogout();
  return (
    <ButtonIcon onClick={logout} disabled={isPending}>
      {!isPending ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default LogoutForm;
