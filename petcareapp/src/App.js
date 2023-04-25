import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <Router>
          <Routes>
              <Route path='/' />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
