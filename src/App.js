//import './assets/custom.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserHistory } from 'history';
import Users from './component/users';
import Header from './component/header';
import UserPage from './component/UserPage';
import Search from './component/search';
import LoadingBar from './component/loadingBar';

const history = createBrowserHistory()
function App() {
    return (
      <div className="App">

        {console.log("  app.js console")}
        <Router history={history}>

        <Header />
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={Users} />
            <Route path="/user/:id" component={UserPage} />
            <Route path="/search" component={Search} />
            <Route path="/loadingbar" component={LoadingBar} />
          </Switch>
        </Provider>

         </Router>

      </div>
    );
  }

  export default App;
