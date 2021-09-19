import React from 'react';
import LoginPage from './Components/LoginPage';
import { Route , Switch } from 'react-router-dom';
import Register from './Components/Register';
import NotFound from './Components/NotFound';
import Newscovid from './Components/newscovid';
import Success from './Components/Success';
import Home from './Components/Home';
import Menubar from './Components/Menubar';





function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Menubar />
          <Home />
        </Route>
        <Route path="/login">
         <Menubar />
        <LoginPage />
        </Route>
        <Route path="/register">
           <Menubar />
          <Register />
        </Route>
        <Route path="/infomation">
           <Menubar />
          <Newscovid />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
