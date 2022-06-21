import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/layout';
import Calendar from './components/calendar';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route exact index element={<Calendar />} />
      </Route>
    </Routes>
  );
}

export default App;
