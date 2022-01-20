import Navigation from '../components/Navigation/Navigation';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className='content'>
        <Home />
        <Projects />
      </div>
    </div>
  );
}

export default App;
