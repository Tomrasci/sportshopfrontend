import React from "react";
import {getCurrentUser} from "../services/auth.service";

const Profile = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>My</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Username:</strong> {currentUser.username}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Role:</strong> {currentUser.role === 3 ? "Admin" : "User"  }
    </div>
  );
};

export default Profile;