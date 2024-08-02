import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import ResultDisplay from './components/ResultDisplay';
import Error from './components/Error';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <Router>
      <div className="App">
        <SearchForm setData={setData} setError={setError} />
        <Routes>
          <Route path="/" element={error ? <Error /> : <ResultDisplay data={data} />} />
          <Route path="/:id" element={error ? <Error /> : <ResultDisplay data={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

