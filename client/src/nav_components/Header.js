import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useHistory} from 'react-router-dom'

function Header({ user, setUser }){
    const history = useHistory()
    
    function handleLogOut(){
        fetch('/logout', {method: 'DELETE'})
        .then(() =>{
            setUser(false)
            history.push("/login")
        })
    };

return (
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LERN
          </Typography>
            {user? 
              <Button onClick={handleLogOut}color="inherit">Log out</Button>
                :
              <Button href= "/login" color="inherit">Log in</Button>
            }        
          </Toolbar>
      </AppBar>
    )
}

export default Header