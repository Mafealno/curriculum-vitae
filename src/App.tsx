import React from "react";

import "./App.css";
import "./global-styles.css";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu options={[
        {id: "1", label: "opa1", link: "opa"},
        {id: "2", label: "opefefwfwefa2", link: "opa"},
        {id: "3", label: "opa3", link: "opa"},
        {id: "4", label: "opa4", link: "opa"}
      ]}/>
      <div id="1" className="container-meu"></div>
      <div id="2" className="container-meu"></div>
      <div id="3" className="container-meu"></div>
      <div id="4" className="container-meu"></div>
      <div id="5" className="container-meu"></div>
      <div id="6" className="container-meu"></div>
      <div id="7" className="container-meu"></div>
      <div id="8" className="container-meu"></div>
    </>
  );
}

export default App;
