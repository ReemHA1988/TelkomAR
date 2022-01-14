import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import userService from "./services/userService.js";
import Footer from "./components/footer";
import Home from "./components/home";
import WhyTelkomAR from "./components/whyTelkomAR";
import Shop from "./components/shop";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Logout from "./components/logout";
import SignUpBiz from "./components/signupBiz";
import CreateCard from "./components/createCard";
import ProtectedRoute from "./components/common/protectedRoute";
import MyCards from "./components/myCards";
import EditCard from "./components/editCard";
import DeleteCard from "./components/deleteCard";

class App extends Component {
  state = { user: null };

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>
        <main className="container flex-fill">
          <Switch>
            <ProtectedRoute
              path="/my-cards/delete/:id"
              component={DeleteCard}
              biz={true}
            />
            <ProtectedRoute
              path="/my-cards/edit/:id"
              component={EditCard}
              biz={true}
            />
            <ProtectedRoute path="/my-cards" component={MyCards} biz={true} />
            <ProtectedRoute
              path="/create-card"
              component={CreateCard}
              biz={true}
            />
            <Route path="/shop" component={Shop} biz={true} />
            <Route path="/whyTelkomAR" component={WhyTelkomAR} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signupBiz" component={SignUpBiz} />
            <Route path="/signin" component={SignIn} />
            <Route path="/logout" component={Logout} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
