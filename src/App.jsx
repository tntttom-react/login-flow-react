import React from "react";

import LoginForm from "./Components/LoginForm";

var isUserRegistered = false;
var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? (
        <h1>Hello!</h1>
      ) : (
        <LoginForm isRegistered={isUserRegistered} />
      )}
    </div>
  );
}

export default App;
