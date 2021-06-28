import React from "react";
import { Link } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import HamburgerMenu from "../components/HamburgerMenu";

function Nav(props) {
  const { currentUser, handleLogout } = props;
  const mediaQuery = useMediaPredicate("(max-width:500px)");
  return (
    <div className="nav">
      <div className="nav-details">
        <div className="tbn-logo">
          <Link to="/">
            <p className="app-name">Comical</p>
          </Link>
          <br></br>
        </div>
        {mediaQuery ? (
          <HamburgerMenu
            currentUser={currentUser}
            handleLogout={handleLogout}
          />
        ) : (
          <div className="nav-options">
            {currentUser ? (
              <>
                <p>Hi, {currentUser.username}!</p>
                <div className="options">
                  <Link to="/comics/add">Add A Comic Strip</Link>
                  <button className="logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="guest-options">
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
