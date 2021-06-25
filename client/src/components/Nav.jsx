import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="nav">
      <div className="nav-details">
        <Link to="/">
          <p>Comical</p>
        </Link>
        {currentUser ? (
          <>
            <p>Hi, {currentUser.username}!</p>
            <Link to="/comics/add">Add Comic</Link>
            <Link to="/comics">Check It Out</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
