import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import HomeEvent from "./Pages/Home-event";
import Faq from "./Pages/Faq";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
// import NotFound from "./Pages/404";
import { animateScroll } from "react-scroll";
import RecipientSignUp from "./Pages/RecipientSignUp";
import DonorOrRecipientPage from "./Pages/DonorOrRecipientPage";
import TermsOfUse from "./components/Footer/TermsOfUse";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";


class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
    if (performance.navigation.type === 1) {
      window.location.href = "/";
    }
  }
  scrollToEventAbout = () => {
    animateScroll.scrollToComponent(Contact, { offset: 0, duration: 500 });
  };
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={HomeEvent} />
          <ScrollToTopRoute exact={true} path={"/Faq"} component={Faq} />
          <ScrollToTopRoute exact={true} path={"/SignIn"} component={SignIn} />
          <ScrollToTopRoute exact={true} path={"/SignUp"} component={SignUp} />
          <ScrollToTopRoute exact={true} path={"/RecipientSignUp"} component={RecipientSignUp} />
          <ScrollToTopRoute
            exact={true}
            path={"/Contact"}
            component={Contact}
          />
           <ScrollToTopRoute
            exact={true}
            path={"/DonorOrRecipientPage"}
            component={DonorOrRecipientPage}
          />
          <ScrollToTopRoute exact={true} path={"/terms"} component={TermsOfUse} />
          <ScrollToTopRoute exact={true} path={"/policy"} component={PrivacyPolicy} />
        </Switch>
      </Router>
    );
  }
}

export default App;
