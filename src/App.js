import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
