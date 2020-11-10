import {Route, Switch} from 'react-router-dom'
import LandingView from '../Routes/Landing/LandingView'
import NotFoundRoute from '../Routes/NotFoundRoute/NotFoundRoute'
import Artwork from '../Routes/Artwork/Artwork'
import Classes from '../Routes/Classes/Classes'
import Blog from '../Routes/Blog/Blog'
import Consulting from '../Routes/Consulting/Consulting'
import Login from '../Routes/Login/Login'
import CreateAccount from '../Routes/Create-Account/CreateAccount'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AppOverlay">
      <Switch>
        <Route exact path={'/'} component={LandingView} />
        <Route path={'/artwork'} component={Artwork} />
        <Route path={'/classes'} component={Classes} />
        <Route path={'/consulting'} component={Consulting} />
        <Route path={'/blog'} component={Blog} />
        <Route path={'/login'} component={Login} />
        <Route path={'/create'} component={CreateAccount} />
        <Route component={NotFoundRoute} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
