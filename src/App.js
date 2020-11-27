import './App.css';

//components
import Navbar from './components/navbar';
import MovieSlider from './components/MovieSlider'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <MovieSlider />
    </div>
  );
}

export default App;
