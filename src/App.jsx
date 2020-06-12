import React from "react";

import LoginForm from "./Components/LoginForm";
import WelcomeForm from "./Components/WelcomeForm";

var isUserRegistered = true;
var isLoggedIn = true;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? (
        <WelcomeForm />
      ) : (
        <LoginForm isRegistered={isUserRegistered} />
      )}
    </div>
  );
}

export default App;
