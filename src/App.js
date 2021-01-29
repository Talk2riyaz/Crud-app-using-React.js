import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import AddUser from "./components/AddUser/AddUser";
import EditUser from "./components/EditUser/EditUser";
import ViewUser from "./components/ViewUser/ViewUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exactt path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/adduser" component={AddUser}/>
          <Route exact path="/edituser/:id" component={EditUser}/>
          <Route exact path="/users/:id" component={ViewUser}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
