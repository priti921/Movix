import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Navbar from './components/navbar';
import Home from './page/Home'
import Movies from './page/Movies';
import Series from './page/Series';
import MovieDetails from './components/MovieDetails';


function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
          <Route path="/movix" exact component={Home} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/Movies" exact component={Movies} />
          <Route path="/Series" exact component={Series} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
