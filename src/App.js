import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Orchids from './components/Orchids';
import Detail from './components/Detail';
import Naturals from './components/Naturals';
import Contact from './components/Contact';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* ✅ Bootstrap layout để đẩy footer xuống cuối */}
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          
          {/* Nội dung chính */}
          <div className="container my-4 flex-grow-1">
            <Routes>
              <Route path="/" element={<Orchids />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/naturals" element={<Naturals />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
