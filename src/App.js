// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Profil from './pages/Profil'
import Error from './pages/Error'
// Components
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import RequireLogin from './components/auth/RequireLogin'
// Store
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route element={<RequireLogin />}>
              <Route path="/profile" element={<Profil />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
