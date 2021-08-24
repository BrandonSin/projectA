import logo from './logo.svg';
import './App.css';
import LoginButton  from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Home from './components/Home';
import Profile from './components/Profile';
import LandingPage from './pages/LandingPage';
import { useAuth0 } from '@auth0/auth0-react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Oops..{error.message}</div>
  }

  return (
    
      <div>
        {!isAuthenticated? <LandingPage/>
        :<div>
        <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Profile' component={Profile}></Route>
          {/* <Route path='/Contact' component={}/>
          <Route path='/Support' component={}/>
          <Route path='/Privacy' component={}/> */}
        </Switch>
        </Router>
        
        
        </div>
        
        }
      
      
    </div>

    
    
  );
}

export default App;
