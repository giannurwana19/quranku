import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DetailSurah from './pages/DetailSurah';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/surah/:nomor" component={DetailSurah} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
