import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';


function FolderDrawer({ user, setUser }){
    const drawerWidth = 240;
    const history = useHistory()
    const [topLevelData, setTopLevelData] = useState(null)
    const [contents, setContents] = useState(null)

    useEffect(() => {
        fetch('/folders')
        .then(r=> {
          if (r.ok){
            r.json().then((folders) => {
              setTopLevelData(folders);
            });
          }
        })
      }, [])


    function handleLogOut(){
        fetch('/logout', {method: 'DELETE'})
        .then(() =>{
            setUser(false);
            history.push('/login');
        })
    };

    function handleOpen(id){
        console.log(`folder ${id} opened`)

        fetch(`/folder_contents/${id}`)
        .then(r=> {
          if (r.ok){
            r.json().then((res) => {
              setContents(res);
              console.log(res);
            });
          };
        });
    }

return (
    <>
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
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
            <Typography variant="h6" noWrap component="div">
                LERN
            </Typography>
            {user? 
            <Button onClick={handleLogOut}color="inherit">Log out</Button>
            :
            <Button href= "/login" color="inherit">Log in</Button>
            }
            </Toolbar>
        </AppBar>
     <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>         
              <ListItem >
                <ListItemIcon>
                    <GraphicEqIcon />
                </ListItemIcon>
                <ListItemText primary= 'LERN' />
              </ListItem>
          <Divider />
          {topLevelData? 
                <List>
                    {topLevelData.map((folder, index) => (
                    <ListItem onClick={()=>handleOpen(folder.id)}button key={folder.id}>
                        <ListItemIcon>
                        {folder.emoji}
                        </ListItemIcon>
                        <ListItemText primary={folder.name} />
                    </ListItem>
                    ))}
                </List>
                : 
                null
            }
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Button color="primary">Display folders</Button>
        <h4>
            User data:
        </h4>
      </Box>
    </Box>
    </>
);

}

export default FolderDrawer