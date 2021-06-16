import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <div className="App">
          <h1>deploying</h1>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
