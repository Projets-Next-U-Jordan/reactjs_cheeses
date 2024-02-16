import styled from '@emotion/styled'
import User from './user/User';

const HeaderContainer = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.25rem;
  gap: 0.5rem;
`;

const Header = () => {
    return <HeaderContainer>
      <User/>
    </HeaderContainer>
}

export default Header;