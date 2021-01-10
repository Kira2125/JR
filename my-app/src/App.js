import logo from './logo.svg';
import './App.css';
import ListMessage from "./components/ListMessage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import UpdateMessage from "./components/UpdateMessage";
import CreateMessage from "./components/CreateMessage";

function App() {
  return (
      <div>
          <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route  exact path="/" render={() =><ListMessage/>} />
                        <Route  exact path="/message" render={() =><ListMessage/>} />
                        <Route  exact path="/message/:id" render={(props) => <UpdateMessage {...props}/>} />
                    </Switch>
                </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
