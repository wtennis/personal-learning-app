import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 
import LogIn from './LogIn';
import SignUp from './SignUp'; 
import Home from './Home'
import { useState, useEffect } from 'react'


function App() {
const [user, setUser] = useState(false)


useEffect(() => {
  fetch('/me')
  .then(r=> {
    if (r.ok){
      r.json().then((user) => {
        setUser(user);
        console.log(user)
      });
    }
  })
})

  return (
    <>
    <Router>
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
            <Route path='/signup'>
              <SignUp/>
            </Route>
          <Route path='/login'>
            <LogIn/>
          </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
