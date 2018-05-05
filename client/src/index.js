import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Index";

import Search from "./components/Search/OutputBox";
import Page404 from "./components/Error/404";
import Page500 from "./components/Error/500";
import "./index.css";

ReactDOM.render(
  // <ApolloProvider client={client}>
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/internal" component={null} />
        <Route path="/article" component={null} />
        <Route path="/search" component={Search} />
        <Route path="/404" component={Page404} />
        <Route path="/500" component={Page500} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </div>
  </Router>,
  // </ApolloProvider>
  document.getElementById("root")
);
