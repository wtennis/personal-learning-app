import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 
import LogIn from './LogIn';
import SignUp from './SignUp'; 
import Home from './Home'
import { useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getUser } from "../redux/actions/userActions";
import { useDispatch } from 'react-redux'


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
const dispatch = useDispatch()


useEffect(() => {
  dispatch(getUser());
}, [])

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
          <Route path='/login'>
            <LogIn />
          </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
