import React, { Component} from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import HomeEvent from "./Pages/Home-event";
import Faq from "./Pages/Faq";
import DonorSignUp from "./Pages/DonorSignUp";
// import NotFound from "./Pages/404";
import { animateScroll } from "react-scroll";
import RecipientSignUp from "./Pages/RecipientSignUp";
import DonorOrRecipientPage from "./Pages/DonorOrRecipientPage";
import TermsOfUse from "./components/Footer/TermsOfUse";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import Login from "./Pages/Login";
import DonorSignIn from "./Pages/DonorSignIn";
import RecipientSignIn from "./Pages/RecipientSignIn";
import RecipientMainPage from "./Pages/RecipientMainPage";
import DonorMainPage from "./Pages/DonorMainPage";
import UpdateRecipientProfile from "./Pages/UpdateRecipientProfile";
import UpdateDonorProfile from "./Pages/UpdateDonorProfile";


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
          <ScrollToTopRoute exact={true} path={"/DonorSignIn"} component={DonorSignIn} />
          <ScrollToTopRoute exact={true} path={"/RecipientSignIn"} component={RecipientSignIn} />
          <ScrollToTopRoute exact={true} path={"/DonorSignUp"} component={DonorSignUp} />
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
          <ScrollToTopRoute
            exact={true}
            path={"/RecipientMainPage"}
            component={RecipientMainPage}
          />
          <ScrollToTopRoute
            exact={true}
            path={"/DonorMainPage"}
            component={DonorMainPage}
          />
          <ScrollToTopRoute
            exact={true}
            path={"/UpdateRecipientProfile"}
            component={UpdateRecipientProfile}
          />
          <ScrollToTopRoute
            exact={true}
            path={"/UpdateDonorProfile"}
            component={UpdateDonorProfile}
          />
          <ScrollToTopRoute exact={true} path={"/LogIn"} component={Login} />
          <ScrollToTopRoute exact={true} path={"/terms"} component={TermsOfUse} />
          <ScrollToTopRoute exact={true} path={"/policy"} component={PrivacyPolicy} />
        </Switch>
      </Router>
    );
  }
}

export default App;
