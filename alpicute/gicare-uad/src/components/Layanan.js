import React from 'react';
import './Layanan.css';


const Layanan = () => {
    return (
        <div className="layanan-container">
            <h1>Layanan Perawatan Gi-Care UAD</h1>
            <div className="layanan-grid">
                {/* Layanan Behel Gigi */}
                <div className="layanan-item">
                    <div className="layanan-icon">
                        <img src="/behel.png" alt="Pasang Behel Gigi" /> {/* Path absolut */}
                    </div>
                    <h2>Behel Gigi</h2>
                    <p>Pemasangan behel untuk merapikan struktur gigi Anda.</p>
                </div>
                {/* Layanan Scaling Gigi */}
                <div className="layanan-item">
                    <div className="layanan-icon">
                        <img src="/scaling.png" alt="Scaling Gigi" /> {/* Path absolut */}
                    </div>
                    <h2>Scaling Gigi</h2>
                    <p>Pembersihan karang gigi untuk menjaga kesehatan gigi dan gusi.</p>
                </div>

                {/* Tambahkan layanan lainnya jika diperlukan */}
            </div>
        </div>
    );
};

export default Layanan;
