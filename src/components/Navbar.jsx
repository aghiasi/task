import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar,Button } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, background:'#ffff' }}>
      <AppBar position="static" color='#ffff'>
        <Toolbar>
        <Avatar sx={{ bgcolor:'#f0f0f0f', marginLeft:2 , boxShadow:'none ' }}>
            R
          </Avatar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            نام نام خانوادگی
          </Typography>
          <Button variant="fib"  color='custome' mini >
          <NoteAltOutlinedIcon />
        </Button>
          <Button variant="fib"  color='custome' mini >
          <NotificationsActiveOutlinedIcon />
        </Button>

        </Toolbar>

      </AppBar>

    </Box>
  );
}
