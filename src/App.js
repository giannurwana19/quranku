import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DetailSurah from './pages/DetailSurah';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/surah/:nomor" component={DetailSurah} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
