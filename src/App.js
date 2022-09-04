import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';
import Quote from './components/Quote';
import Navigation from './components/Navigation';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import FilteredQuote from './components/FilteredQuote';

function App() {
  return (
    <div className="App">
      <Header/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/filteredQuote" element={<FilteredQuote />} />
    </Routes>

    <Navigation/>
    </div>
  );
}

export default App;
