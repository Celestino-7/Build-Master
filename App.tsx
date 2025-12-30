
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Calculadora from './pages/Calculadora';
import MaoDeObra from './pages/MaoDeObra';
import Norms from './pages/Normas';
import Comparacao from './pages/Comparacao';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/mao-de-obra" element={<MaoDeObra />} />
          <Route path="/normas" element={<Norms />} />
          <Route path="/comparacao" element={<Comparacao />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
