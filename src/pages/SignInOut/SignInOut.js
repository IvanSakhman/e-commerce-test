import React from "react";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

import "./sign-in-out.scss";

const SignInOutPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInOutPage;
