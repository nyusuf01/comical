import { useState, useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import {
  loginUser,
  signUpUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleSignUp = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch></Switch>
      </Layout>
    </div>
  );
}
export default App;
