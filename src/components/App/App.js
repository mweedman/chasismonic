import {Route, Switch} from 'react-router-dom'
import LandingView from '../../routes/Landing/LandingView'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import Artwork from '../../routes/Artwork/Artwork'
import Classes from '../../routes/Classes/Classes'
import Blog from '../../routes/Blog/Blog'
import Consulting from '../../routes/Consulting/Consulting'
import Login from '../../routes/Login/Login'
import CreateAccount from '../../routes/Create-Account/CreateAccount'
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
