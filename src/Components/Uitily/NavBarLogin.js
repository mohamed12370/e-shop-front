import React from 'react';
import {
  Container,
  FormControl,
  Nav,
  NavDropdown,
  Navbar,
} from 'react-bootstrap';
import logo from '../../Images/logo.png';
import login from '../../Images/login.png';
import cart from '../../Images/cart.png';
import { Link, useNavigate } from 'react-router-dom';
import NavbarSearchHook from '../../helperHook/Search/navbar-search-hook';
import AllInCartHook from '../../helperHook/Cart/all-in-cart-hook';

export default function NavBarLogin() {
  const navigate = useNavigate();
  const { allProductCart } = AllInCartHook();
  const { handleChangeSearch, logOut, userData } = NavbarSearchHook();

  let word = localStorage.getItem('searchWord')
    ? localStorage.getItem('searchWord')
    : '';

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="logo" alt="shop" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center mt-2 mt-sm-0"
            aria-label="Search"
            value={word}
            onChange={handleChangeSearch}
          />
          <Nav className="me-auto d-flex align-items-start align-items-md-center">
            {userData?.name ? (
              <NavDropdown
                title={userData.name}
                id="basic-nav-dropdown "
                className="d-flex align-items-center "
              >
                {userData.role === 'admin' ? (
                  <NavDropdown.Item>
                    <Link
                      to={'/admin/allproducts'}
                      className="text-decoration-none text-white user-proile"
                    >
                      {' '}
                      لوحة التحكم{' '}
                    </Link>
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item>
                    <Link
                      to={'/user/profile'}
                      className="text-decoration-none text-white user-proile"
                    >
                      {' '}
                      الصفحة الشخصية{' '}
                    </Link>
                  </NavDropdown.Item>
                )}

                <NavDropdown.Item href="#" onClick={logOut}>
                  تسجيل خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                className="nav-text d-flex mt-3 justify-content-center "
                onClick={() => navigate('/login')}
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: 'white' }}>دخول</p>
              </Nav.Link>
            )}

            <Nav.Link
              className="nav-text d-flex mt-3 justify-content-center position-relative"
              style={{ color: 'white' }}
              onClick={() => navigate('/cart')}
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: 'white' }}>العربه</p>
              <span class="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-danger">
                {allProductCart || 0}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
