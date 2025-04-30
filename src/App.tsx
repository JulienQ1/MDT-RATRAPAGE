import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MuscleExplorer from './components/MuscleExplorer';
import About from './components/pages/About';
import { MuscleProvider } from './contexts/MuscleContext';

function App() {
  return (
    <Router>
      <MuscleProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MuscleExplorer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </MuscleProvider>
    </Router>
  );
}

export default App