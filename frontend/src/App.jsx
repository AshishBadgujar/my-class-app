import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.css';
import Home from './pages/home';
import Layout from './components/Layout';
import Homework from './pages/homework';
import Tests from './pages/tests';
import Admission from './pages/admission'
import Subjects from './pages/subjects';
import Schools from './pages/schools';
import Stds from './pages/stds';
import SendWp from './pages/sendWp';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admission" element={<Admission />} />
          <Route exact path="/homework" element={<Homework />} />
          <Route exact path="/tests" element={<Tests />} />
          <Route exact path="/subjects" element={<Subjects />} />
          <Route exact path="/schools" element={<Schools />} />
          <Route exact path="/stds" element={<Stds />} />
          <Route exact path="/send-wp/:fileName" element={<SendWp />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
