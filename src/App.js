import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./App.css";
import Navigation from "./components/navigation/navigation.component";

import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Sign from "./pages/sign/sign-in-up.component";
import CheckOut from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //createUserProfileDocument fucntion will add in the database and bring userRef
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Sign />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToPros = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToPros, mapDispatchToProps)(App);
