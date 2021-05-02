import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import { Route, BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

//Page imports
import Home from "./pages/Home/Home";
import WhatIdo from "./pages/WhatIdo/WhatIdo";
import WhoIam from "./pages/WhoIam/WhoIam";
import Wheretofindme from "./pages/Wheretofindme/Wheretofindme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/whoIam" component={WhoIam} />
      <Route path="/whatIdo" component={WhatIdo} />
      <Route path="/wheretofindme" component={Wheretofindme} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
