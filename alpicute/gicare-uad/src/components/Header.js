import React from 'react';
import { Link } from 'react-router-dom'; // Import Link dari React Router
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-left">
                <div className="logo"></div>
                <div className="title">
                    <h1>GI-Care UAD</h1>
                    <p>Klinik Gigi Profesional</p>
                </div>
            </div>
            <nav className="header-right">
                <ul>
                    <li><Link to="/">Home</Link></li> {/* Gunakan Link untuk navigasi */}
                    <li><Link to="/layanan">Layanan</Link></li>
                    <li><Link to="/reservasi">Reservasi</Link></li>
                    <li><Link to="/dokter">Dokter</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
