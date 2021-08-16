import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import "./LoginButton.css"

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <div>
                <a className="button1" onClick={() => loginWithRedirect()}>Sign Up | Login
                </a>
            
            </div>

        )
        
    )
}

export default LoginButton
