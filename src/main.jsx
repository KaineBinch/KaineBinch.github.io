import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faSquareFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faPhone,
  faEnvelope,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faChevronRight,
  faPhone,
  faFilePdf,
  faEnvelope,
  faSquareFacebook,
  faInstagram,
  faLinkedin
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
