import './App.css';

//components
import Navbar from './components/navbar';
import MovieSlider from './components/MovieSlider';
import TrendingNow from './components/TrendsNow';
import PopularNow from './components/PopularNow';
import About from './components/about';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <MovieSlider />
      <TrendingNow />
      <PopularNow />
      <About />
    </div>
  );
}

export default App;
