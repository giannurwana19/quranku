import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search';
import Footer from './components/Footer';
import HeadingText from './components/HeadingText';
import Surah from './components/Surah';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <Search />
        <HeadingText />
        <Surah />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
