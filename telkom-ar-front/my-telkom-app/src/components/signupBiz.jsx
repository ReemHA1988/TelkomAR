import Joi from "joi";
import Form from "./common/form";
import PageHeader from "./common/pageHeader";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";

class SignUpBiz extends Form {
  state = {
    form: {
      email: "",
      password: "",
      name: "",
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
    name: Joi.string().required().min(2).label("Name"),
  };

  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: true };

    try {
      await userService.createUser(body);
      await userService.login(body.email, body.password);
      window.location = "/create-card";
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
        <PageHeader title="Sign Up with Real App" />
        <div className="row">
          <div className="col-12">
            <p>Open a new account, It's free you yemen!!</p>
          </div>
        </div>
        <form
          onSubmit={this.handleSubmit}
          noValidate="novalidate"
          autoComplete="off"
        >
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          <div className="mt-2">{this.renderButton("Sign Up")}</div>
        </form>
      </div>
    );
  }
}

export default SignUpBiz;
