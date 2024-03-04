import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faFilePdf,
  faPhone,
  faEnvelope,
  faHouse,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faFilePdf, faPhone, faEnvelope, faHouse, faGlobe);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
