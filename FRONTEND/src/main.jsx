import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContext from "./Context/UserContext";
const container = document.getElementById("root");
const root = createRoot(container);

root.render( 
<UserContext>
    <App/>
</UserContext>);
