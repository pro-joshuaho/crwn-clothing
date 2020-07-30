import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth, createUserProfile } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don't match");
      return; // don't do the rest things
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfile(user, { displayName });

      this.setState({
        email: "",
        displayName: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (input) => {
    const { value, name } = input.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <p>Sign up with your email and password</p>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            value={this.state.displayName}
            type="text"
            name="displayName"
            label="Display Name"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            value={this.state.email}
            type="email"
            name="email"
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            value={this.state.password}
            type="password"
            name="password"
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            value={this.state.confirmPassword}
            type="password"
            name="confirmPassword"
            label="Confirm pasword"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
