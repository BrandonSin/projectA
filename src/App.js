import logo from './logo.svg';
import './App.css';
import LoginButton  from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Home from './components/Home';

function App() {
  return (
    <div>
      <LoginButton/>
      <LogoutButton/>
      <Home/>
    </div>
  );
}

export default App;
