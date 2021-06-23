import React from "react";
import { Link } from "react-router-dom";

function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <header>
        <Link to="/">
          <p>Comical</p>
        </Link>
        {currentUser ? (
          <>
            <p>Hi, {currentUser.username}!</p>
            <Link to="/add">Add Comic Strip</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </header>
      <hr />
      {props.children}

      <footer></footer>
    </div>
  );
}

export default Layout;
