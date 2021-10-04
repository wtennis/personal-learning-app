import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LernList from '../components/LernList';
import Header from './Header';
import AddFolderDialog from '../components/AddFolderDialog'
import CircularProgress from '@mui/material/CircularProgress';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useSelector } from 'react-redux'


function Home(){
    const drawerWidth = 400;
    const history = useHistory()
    const [topLevelData, setTopLevelData] = React.useState(null)
    const [suggestion, setSuggestion] = React.useState("")
    const [remount, setRemount] = useState('false')
    const reduxUser = useSelector((state) => state.user)

    console.log(reduxUser)

  if(!reduxUser.user && !reduxUser.loading){
    history.push("/login");
  }

    useEffect(() => {
        fetch('/folders')
        .then(r=> {
          if (r.ok){
            r.json().then((folders) => {
              setTopLevelData(folders);
            });
          }
        })
      }, [remount])

      async function fetchSuggestion(){
        let response = await fetch(`https://www.boredapi.com/api/activity?type=education`)
        .then(r=> { if(r.ok) 
            return r.json()
        })
        setSuggestion(response.activity)
    }


return (
  <>
  {reduxUser.loading?  
      <Box  display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            >
        <CircularProgress  />
      </Box> 
    : 
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header user={reduxUser.user}/>
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
                  <ListItemText/>
                  <AddFolderDialog remount={remount} setRemount={setRemount}/>
                </ListItem>
            <Divider />
            <LernList contents={topLevelData} paddingLeft={4} remount={remount} setRemount={setRemount}/>
          </Box>
        </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <Typography sx={{mb: 2}}variant="h4">Welcome, {reduxUser.user.username}</Typography>
              <Box  display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="10vh"
                >
              <Button onClick={fetchSuggestion} variant="contained">Learning Suggestion</Button>
              </Box> 
              <Box  display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="12vh"
                mx="190px"
                style={{backgroundColor: "#FFF6EC", borderRadius: "2em"}}
                >
                <Typography variant="h4">
                  {suggestion}
                </Typography>
              </Box>
              {suggestion.length>0? <Button target="_blank" href={"//www.google.com"}endIcon={<OpenInNewIcon/>}sx={{left: "70%"}}><h3 className="rainbow-text">Google it</h3></Button>:null}
        </Box>
      </Box>
    }
    </>
);

}

export default Home