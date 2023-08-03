// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Profil from './pages/Profil'
import Error from './pages/Error'

// Components
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <Router>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
