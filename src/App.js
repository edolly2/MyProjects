import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products";
import JumbotronComponent from "./Jumbotron";
import UserForm from "./UserForm";
import GitHub from "./GitHub";

function App() {
  return (
    <div>
      <GitHub />
      <h1>My First React App!</h1>
      <JumbotronComponent>
        This is a dynamic jumbotron sentence.
      </JumbotronComponent>
      <Products />
      <UserForm />
    </div>
  );
}

export default App;
