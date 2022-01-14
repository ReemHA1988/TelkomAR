import Form from "./common/form";
import Joi from "joi";
import PageHeader from "./common/pageHeader";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";

class SignIn extends Form {
  state = {
    form: {
      email: "",
      password: "",
    },
  };

  schema = {
    email: Joi.string()
      .required()
      .email({
        tlds: { allow: false },
      })
      .label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  async doSubmit() {
    const { email, password } = this.state.form;
    try {
      await userService.login(email, password);

      if (this.props.location.state?.from) {
        window.location = this.props.location.state.from.pathname;
        return;
      }

      window.location = "/";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.data } });
      }
    }
  }

  render() {
    if (userService.getCurrentUser()) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <PageHeader title="Sign In with Real App" />
        <div className="row">
          <div className="col-12">
            <p>Sign in with your account</p>
          </div>
        </div>
        <form
          onSubmit={this.handleSubmit}
          noValidate="novalidate"
          autoComplete="off"
        >
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          <div className="mt-2">{this.renderButton("Sign In")}</div>
        </form>
      </div>
    );
  }
}

export default SignIn;
