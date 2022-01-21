import Navigation from '../components/Navigation/Navigation';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className='content'>
        <Home id='home' />
        <Projects id='projects' />
        <About id='about' />
        <Contact id='contact' />
        <Footer id='footer' />
      </div>
    </div>
  );
}

export default App;
