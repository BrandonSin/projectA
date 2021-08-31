import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

//Component: LogoutButton
//Descr: creates a button for logging out

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
             
            <button onClick={() => logout()}>Log out</button>
        </div>

        )
        
    )
}

export default LogoutButton
