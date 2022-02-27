import React from "react"
import './App.css';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import LandingPage from "./screens/landingPage/LandingPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyNotez from './screens/myNotes/MyNotez';
import RegisterPage from './screens/registerPage/RegisterPage';
import LoginPage from './screens/loginPage/LoginPage';

const App = () => {
  return (
      <Router>
        <Header />
          <main>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/mynotez" element={<MyNotez />} />
              </Routes>
          </main>
        <Footer />
      </Router>
  )
}


export default App;
