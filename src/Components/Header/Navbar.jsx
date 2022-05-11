import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { getCountProductsInCart } from '../../helpers/functions';
import { useCart } from '../../contexts/CartContextProvider';
import { ADMIN } from '../../helpers/consts';
import Search from './Search';

const pages = [
  { name: 'О нас', link: '/about', id: 1 },
  { name: 'Продукты', link: '/products', id: 2 },
];


const Navbar = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { addProductToCart } = useCart();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  return (
    <AppBar position="static" elevation={3}>
      <Container maxWidth="xl" sx={{ background: 'grey' }} >
        <Toolbar disableGutters className="appbar">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img
              id="logo"
              src="https://cdn1.vectorstock.com/i/1000x1000/74/60/delicious-bakery-cakes-and-cookies-vector-26557460.jpg"
              alt=""
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                color: 'black',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box>
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link to={page.link}>
                      <Typography
                        sx={{
                          ml: '0',
                          my: 1,
                          color: 'black',
                          display: 'block',
                        }}
                      >
                        {page.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Box>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Menu>
          </Box>
          <Box
            sx={{
              justifyContent: 'center',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Link to={page.link} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    ml: 'auto',
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontWeight: 'bold',
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}

            {email == ADMIN ? (
              <Link to="/admin">
                <Button sx={{ my: 2, color: 'black' }}>ADMIN PAGE</Button>
              </Link>
            ) : (
              <Link to="/cart">
                <Button sx={{ my: 2, color: 'black' }}>
                  <Badge badgeContent={count} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </Button>
              </Link>
            )}
          </Box>

            <Search />

          <Box sx={{ flexGrow: 0 }}>
            {email ? (
              <Button
                sx={{ color: 'black', fontWeight: 'bold' }}
                onClick={handleLogout}
              >
                LOGOUT
              </Button>
            ) : (
              <Link to="/auth">
                <Button sx={{ color: 'black', fontWeight: 'bold' }}>
                  LOGIN
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
