import './App.css';

//components
import Navbar from './components/navbar';
import MovieSlider from './components/MovieSlider';
import TrendingNow from './components/TrendsNow';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <MovieSlider />
      <TrendingNow />
    </div>
  );
}

export default App;
