import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "../App.css";
import NavBar from "./shared/NavBar";
import Home from "./pages/Home.js";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Timeline from "./pages/Timeline";
import AdminLogin from "./pages/AdminLogin";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
