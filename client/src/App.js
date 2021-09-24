import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 
import LogIn from './nav_components/LogIn';
import SignUp from './nav_components/SignUp'; 
import Home from './nav_components/Home'
import { useState, useEffect } from 'react'


function App() {
const [user, setUser] = useState(false)


useEffect(() => {
  fetch('/me')
  .then(r=> {
    if (r.ok){
      r.json().then((user) => {
        setUser(user);
      });
    }
  })
}, [])

  return (
    <>
    <Router>
      <Switch>
          <Route exact path='/'>
            <Home user={user} setUser={setUser}/>
          </Route>
            <Route path='/signup'>
              <SignUp setUser={setUser} user={user}/>
            </Route>
          <Route path='/login'>
            <LogIn setUser={setUser} user={user}/>
          </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
