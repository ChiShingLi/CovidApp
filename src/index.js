import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Detail from "./components/Detail";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ background: "#F2F2F2" }}>
      <TopNavbar />
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/Detail/:id" component={Detail}/>
      </Router>
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();