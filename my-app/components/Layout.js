import MainNav from './MainNav';
import { Container } from 'react-bootstrap';

export default function Layout({ children }) {
  return (
    <>
      <MainNav />
      <div style={{ paddingTop: '100px' }}>
        <Container>
          {children}
        </Container>
      </div>
    </>
  );
}
