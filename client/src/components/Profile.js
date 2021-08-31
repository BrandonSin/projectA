import React from 'react'
import "./Profile.css"
import { useAuth0, User } from '@auth0/auth0-react';


//Component: Profile
//basic profile that gets user's picture and name from Auth0 cloud database

const Profile = () => {
    const { user } = useAuth0();


    return (
        
        <div className="profile-container">
            <h1>Profile</h1>
            <div className="line"></div>
            <div className="profile-picture-container">
                <img className="profile-picture" src={user.picture} alt={user.name}/>
            </div>
            <div className="user-container">
                <div>{user.name}</div>
                <div>{user.email}</div>
            </div>
        </div>
    )
}

export default Profile
