import React from "react";
import Input from "./Input";

function LoginForm(props) {
  return (
    <div>
      <h1>{props.isRegistered ? "Login" : "Sign Up!"}</h1>
      <form>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {!props.isRegistered && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        <button type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
