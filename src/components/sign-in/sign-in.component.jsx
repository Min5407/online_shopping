import React from "react";
import "./sing-in.style.scss";

import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";

import { auth, googleSignIn } from "../../firebase/firebase.utils.js";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handelSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    //setstate below will check the name of the input and if its same set the state with the value
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>Already Have an Account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handelSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <Button type="submit"> Sign in</Button>
            <Button onClick={googleSignIn} googleButton>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
