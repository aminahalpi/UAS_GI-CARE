import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import Header from './components/Header';
import Home from './components/Home';
import Layanan from './components/Layanan'; // Pastikan file ini sudah ada
import Reservasi from './components/Reservasi'; // Tambahkan halaman lain jika diperlukan
import Dokter from './components/Dokter';
import './App.css';
import './index.css';

const App = () => {
    return (
        <Router>
            <div className="page-background"> 
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Rute ke Home */}
                    <Route path="/layanan" element={<Layanan />} /> {/* Rute ke Layanan */}
                    <Route path="/dokter" element={<Dokter />} /> {/* Rute ke Dokter */}
                    <Route path="/reservasi" element={<Reservasi />} /> {/* Rute ke Reservasi */}
                </Routes>
            </main>
            </div>
        </Router>
    );
};

export default App;
