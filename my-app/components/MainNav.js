import { Navbar, Nav, Form, Button, Container, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store';
import { useState } from 'react';

export default function MainNav() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const queryString = `title=true&q=${searchInput}`;
    if (searchInput.trim()) {
      setSearchHistory((current) => [...current, queryString]);
      router.push(`/artwork?${queryString}`);
      setIsExpanded(false);
    }
  };

  return (
    <Navbar className="fixed-top navbar-dark bg-primary" expand="lg" expanded={isExpanded}>
      <Container>
        <Navbar.Brand>Hyeri Jang</Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setIsExpanded(!isExpanded)} 
        />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link 
                active={router.pathname === "/"} 
                onClick={() => setIsExpanded(false)}
              >
                Home
              </Nav.Link>
            </Link>
            <Link href="/search" passHref legacyBehavior>
              <Nav.Link 
                active={router.pathname === "/search"} 
                onClick={() => setIsExpanded(false)}
              >
                Advanced Search
              </Nav.Link>
            </Link>
          </Nav>

          &nbsp;<Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button variant="outline-light" type="submit">Search</Button>
          </Form>&nbsp;

          <Nav>
            <NavDropdown title="User Name" id="user-dropdown">
              <Link href="/favourites" passHref legacyBehavior>
                <NavDropdown.Item 
                  active={router.pathname === "/favourites"} 
                  onClick={() => setIsExpanded(false)}
                >
                  Favourites
                </NavDropdown.Item>
              </Link>
              <Link href="/history" passHref legacyBehavior>
                <NavDropdown.Item 
                  active={router.pathname === "/history"} 
                  onClick={() => setIsExpanded(false)}
                >
                  Search History
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}