import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './components/navbar/navbar.component';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = () => {
    // This way we avoid using mapStateToProps with the connect HOC and
    // the reselect createStructuredSelector. This selector will be run
    // whenever the function component renders (unless the reference
    // hasn't change since a previous render of the component: if it's chached)
    const currentUser = useSelector(selectCurrentUser);

    // We're getting the dispatch method of redux's store
    const dispatch = useDispatch();

    // This now behaves like a componentDidMount because we know
    // it will only run again when the dependencies array changes
    // and, because is empty, that won't happen
    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
                    }
                />
            </Switch>
        </div>
    );
};

export default App;
