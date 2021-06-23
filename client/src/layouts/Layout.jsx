import React from "react";
import { Link } from "react-router-dom";

function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <nav>
        <Link to="/">
          <p>Comical</p>
        </Link>
        {currentUser ? (
          <>
            <p>Hi, {currentUser.username}!</p>
            <Link to="/comics/add">Add Comic</Link>
            <Link to="/comics">Explore</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </nav>
      <hr />
      {props.children}

      <footer></footer>
    </div>
  );
}

export default Layout;
