import React from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Home = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
            <JSONPretty data={user}/>
            
            </div>

        )
        
    )
}

export default Home
