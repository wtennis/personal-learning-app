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
import { useEffect } from 'react';
import LernList from '../components/LernList';
import Header from './Header';
import AddFolderDialog from '../components/AddFolderDialog'
import CircularProgress from '@mui/material/CircularProgress';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useSelector, useDispatch } from 'react-redux'
import { getData } from "../redux/actions/dataActions";

function Home(){
    const drawerWidth = 400;
    const history = useHistory()
    const [suggestion, setSuggestion] = React.useState("")
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch() 
    const topFolders = useSelector((state) => state.data.filter((item)=> !item.url && !item.parent_folder_id))

  
  if(!user.data && user.status === "unfound"){
    history.push("/login");
  }

    useEffect(() => {
        if(user.data){
          dispatch(getData());
        }
      }, [user.data])

      async function fetchSuggestion(){
        let response = await fetch(`https://www.boredapi.com/api/activity?type=education`)
        .then(r=> { if(r.ok) 
            return r.json()
        })
        setSuggestion(response.activity)
    }

return (
  <>
  {!user.data?  
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
      <Header user={user}/>
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
                  <AddFolderDialog  />
                </ListItem>
            <Divider />
            <LernList contents={topFolders} paddingLeft={4}/>
          </Box>
        </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <Typography sx={{mb: 2}}variant="h4">Welcome, {user.data.username}</Typography>
              <Typography sx={{mb: 2}}variant="h4">topFolders:</Typography>
              {topFolders.map(f => <li key={f.name}>{f.name}</li>)}
              <Button onClick={console.log(topFolders)}>console.log topFolders</Button>

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
                <Typography sx={{p: '22px'}}variant="h5">
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