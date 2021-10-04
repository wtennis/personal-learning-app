import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 
import LogIn from './LogIn';
import SignUp from './SignUp'; 
import Home from './Home'
import { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getUser } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux'


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
const [isLoading, setIsLoading] = useState(true)
const dispatch = useDispatch()
const reduxStateUser = useSelector((state) => state.user)
const [user, setUser] = useState(reduxStateUser.user)



useEffect(() => {
  dispatch(getUser());
  // fetch('/me')
  // .then(r=> {
  //   if (r.ok){
  //     r.json().then((user) => {
  //       setUser(user);
  //       console.log(user)
  //       setIsLoading(false);
  //     });
  //   }else{
  //       setIsLoading(false);
  //     }
  // })
  console.log(reduxStateUser.user)
}, [])

// setTimeout(()=>{
//   setUser(reduxStateUser.user);
//   setIsLoading(false);
// }, 3000);



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
