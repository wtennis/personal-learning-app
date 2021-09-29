import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 
import LogIn from './nav_components/LogIn';
import SignUp from './nav_components/SignUp'; 
import Home from './nav_components/Home'
import { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#55A55A",
      dark: "#00611C",
      light: "#9CED9D"
    },
    secondary: {
      main: "#E57525",
      light: "#FFCC79",
      dark: "#993700"
    },
    background: {
      search: "#FFF6EC"
    }
  },
  typography: {
    fontFamily: 'Gluten'
  },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  }, 
})


function App() {
const [user, setUser] = useState(false)
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  fetch('/me')
  .then(r=> {
    if (r.ok){
      r.json().then((user) => {
        setUser(user);
        setIsLoading(false);
      });
    }
  })
}, [])

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
          <Route exact path='/'>
            <Home user={user} setUser={setUser} isLoading={isLoading}/>
          </Route>
            <Route path='/signup'>
              <SignUp setUser={setUser} user={user}/>
            </Route>
          <Route path='/login'>
            <LogIn setUser={setUser} user={user}/>
          </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
