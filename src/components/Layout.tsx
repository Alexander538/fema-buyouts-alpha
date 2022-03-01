import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../images/logo.png';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Layout = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <AppBar
        position='static'
        color='transparent'
        sx={{ border: 'solid 1px white' }}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Link to='/' style={{ textDecoration: 'none' }}>
                AdaptionApps
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
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
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to='/usmap'
                >
                  <Typography textAlign='center' sx={{ color: 'black' }}>
                    Map
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to='/counties'
                >
                  <Typography textAlign='center' sx={{ color: 'black' }}>
                    Counties
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to='/account'
                >
                  <Typography textAlign='center' sx={{ color: 'black' }}>
                    Account
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              AdaptionApps
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Tabs>
                <Tab
                  sx={{ color: 'white', display: 'block' }}
                  label='Map'
                  value='/usmap'
                  to='/usmap'
                  component={Link}
                />
                <Tab
                  sx={{ color: 'white', display: 'block' }}
                  label='Counties'
                  value='/counties'
                  to='/counties'
                  component={Link}
                />
                <Tab
                  sx={{ color: 'white', display: 'block' }}
                  label='Account'
                  value='/account'
                  to='/account'
                  component={Link}
                />
              </Tabs>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src={Logo} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </React.Fragment>
  );
};
export default Layout;
