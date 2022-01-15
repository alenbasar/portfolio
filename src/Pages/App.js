import Navigation from '../components/Navigation/Navigation';
import Home from '../components/Home/Home';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
