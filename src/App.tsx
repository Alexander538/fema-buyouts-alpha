import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './routes/home';
import MyMap from './routes/usmap';
import Counties from './routes/counties';
import County from './routes/county';
import NoMatch from './components/NoMatch';



function App() {
  return (
    <div className="App">
      <h1>Welcome to adaptionapps.com hello</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="usmap" element={<MyMap />} />
          <Route path="counties" element={<Counties />}>
            <Route path=':countyId' element={<County />} />
          </Route> 
          
        

         
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
