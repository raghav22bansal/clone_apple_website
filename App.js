import logo from "./logo.svg";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
