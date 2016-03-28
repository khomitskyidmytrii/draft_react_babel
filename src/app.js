import React from "react";
import ReactDOM from "react-dom";
import HelloWorldApp from "./components/hello_world_app";
import CreditCardInput from "./components/credit_card_input";

ReactDOM.render(
  <HelloWorldApp />,
  document.getElementById("hello-world-app")
);

ReactDOM.render(
  <CreditCardInput />,
  document.getElementById("credit-card-input")
);
