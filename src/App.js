
import './App.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/cart/:id' element={<CardsDetails />} />
        </Routes>
    </Router>
  );
}

export default App;
