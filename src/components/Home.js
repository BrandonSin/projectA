import React from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import LogoutButton from './LogoutButton';
import './Home.css';

const Home = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (

            <div className="home-container">
            <JSONPretty data={user}/>
            <LogoutButton/>
            </div>

        )
        
    )
}

export default Home
