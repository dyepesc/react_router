import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Team from './components/Team.jsx'
import NotFound from './components/NotFound.jsx'


const App = () => (
  <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home title="Home"/>} />
        <Route path="/team" element={<Team title="Team" />} />
        <Route path="/projects" element={<Projects title="Projects"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </div>
);

export default App
