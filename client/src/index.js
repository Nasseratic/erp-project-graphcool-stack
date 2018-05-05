import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./index.css";

ReactDOM.render(
  // <ApolloProvider client={client}>
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/create" component={null} />
      <Route path="/post/:id" component={null} />
    </div>
  </Router>,
  // </ApolloProvider>
  document.getElementById("root")
);
