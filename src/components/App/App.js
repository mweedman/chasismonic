import {Route, Switch} from 'react-router-dom'
import LandingView from '../Routes/Landing/LandingView'
import NotFoundRoute from '../Routes/NotFoundRoute/NotFoundRoute'
import Artwork from '../Routes/Artwork/Artwork'
import Classes from '../Classes/Classes'
import Blog from '../Blog/Blog'
import Consulting from '../Consulting/Consulting'
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
        <Route component={NotFoundRoute} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
