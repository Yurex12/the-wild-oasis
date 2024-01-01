import styled from 'styled-components';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';

import { useMoveBack } from '../../hooks/useMoveBack';
import { UseBooking } from './UseBooking';
import Spinner from '../../ui/Spinner';
import { HiArrowUpOnSquare, HiTrash } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { UseCheckout } from '../check-in-out/UseCheckout';
import { useDeleteBooking } from './UseDeleteBooking';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = UseBooking();

  const { status, id: bookingId } = booking;

  const { checkout, isCheckingOut } = UseCheckout();

  const { deleteBooking, isDeleting } = useDeleteBooking();

  const moveBack = useMoveBack();

  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type='horizontal'>
        <HeadingGroup>
          <Heading as='h1'>Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {/* <Button
          icon={<HiTrash />}
          onClick={() => deleteBooking(bookingId)}
          disabled={isDeleting}
        >
          Delete
        </Button> */}

        <Modal>
          <Modal.Open opens='delete'>
            <Button variation='danger' icon={<HiTrash />}>
              Delete
            </Button>
          </Modal.Open>

          <Modal.Window name='delete'>
            <ConfirmDelete
              resource='booking'
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
            />
          </Modal.Window>
        </Modal>

        <Button variation='secondary' onClick={moveBack}>
          Back
        </Button>

        {status === 'checked-in' && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check Out
          </Button>
        )}

        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
