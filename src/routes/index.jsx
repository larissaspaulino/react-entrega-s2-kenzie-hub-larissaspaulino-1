import {Switch, Route} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import { useState, useEffect } from "react";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import SignUp from '../pages/SignUp'

const Routes = () => {

    const [auth, setAuth] = useState(false)

    useEffect(() => {
        //poderia ser um state também
        const token = localStorage.getItem("@hub:token")
        //const token = JSON.parse(localStorage.getItem("@do-it:token"))
    
        if (token) {
          return setAuth(true);
        }
      }, []);

    
  return (
    <AnimatePresence>
             <Switch>
            <Route exact path="/">
                <Home  auth={auth}/>
            </Route>
            <Route exact path="/cadastro">
                <SignUp  auth={auth}/>
            </Route>
            <Route exact path="/login">
                <Login auth={auth} setAuth={setAuth}/>
            </Route>
            <Route exact path="/dashboard">
                <Dashboard auth={auth} setAuth={setAuth}/>
            </Route>
        </Switch>
        </AnimatePresence>
  )
}
export default Routes