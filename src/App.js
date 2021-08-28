import Tracker from "./pages/tracker/Tracker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/tracker" render={(props) => <Tracker {...props} />} />
          <Route exact path="/">
            <Redirect to="/tracker" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
