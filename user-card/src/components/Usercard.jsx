import React from "react";
import {Link} from 'react-router-dom'

function Usercard({userInfo}) {
  return (
    <div>
        <div className='userCard'>
          <img src={userInfo.avatar_url} alt={userInfo.login} />
          <h2>{userInfo.login}</h2>
          <h3>{userInfo.name}</h3>
          <Link className='link' to='/followers'>Followers: {userInfo.followers}</Link>
          <p>Following: {userInfo.following}</p>
        </div>
    </div>
  );
}

export default Usercard;
