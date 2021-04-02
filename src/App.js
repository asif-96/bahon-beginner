import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Message from './component/Message/Message'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import './component/Header/Header.css';
import SelectRoad from './component/SelectRoad/SelectRoad';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import './Responsive.css';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
  
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Message></Message>
        <Router>
          <Header visitor={loggedInUser}></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/selectroad">
              <SelectRoad></SelectRoad>
            </PrivateRoute>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </UserContext.Provider>    
  );
}

export default App;
