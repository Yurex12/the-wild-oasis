import styled from 'styled-components';
import { useUser } from '../features/authentication/UseUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const FullPage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  // 1. Load the authenticated user

  const { isLoading, isAuthenticated } = useUser();

  // 3. If there is no authencicated user redirect back to the login page.

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [navigate, isAuthenticated, isLoading]);

  // 2. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // If there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
