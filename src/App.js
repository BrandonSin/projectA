import logo from './logo.svg';
import './App.css';
import LoginButton  from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Home from './components/Home';
import LandingPage from './pages/LandingPage';
import { useAuth0 } from '@auth0/auth0-react';


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    
      <div>
        {!isAuthenticated? <LandingPage/>
        : <Home/> }
      {/* <LandingPage/>
      <LoginButton/>
      <LogoutButton/> */}
      
    </div>

    
    
  );
}

export default App;
