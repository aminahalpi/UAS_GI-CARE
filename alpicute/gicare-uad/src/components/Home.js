import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FeatureCard({ icon, title, description, logo }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.transition = 'transform 0.3s ease';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div
      className="bg-blue-100 rounded-lg p-6 text-center shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={logo} alt="Logo" className="w-16 h-auto mx-auto mb-4" />
      <i className={icon} />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Kenapa Harus Memilih GI-Care UAD?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <FeatureCard
          icon="fas fa-stethoscope"
          title="Dokter Gigi Profesional"
          description="Klinik gigi dengan dokter spesialis terlengkap. Didukung 70 Dokter Gigi Umum dan Spesialis lulusan universitas ternama di Indonesia."
          logo={`${process.env.PUBLIC_URL}/image1.png`}
        />
        <FeatureCard
          icon="fas fa-heart"
          title="Melayani Sepenuh Hati"
          description="Selalu berinovasi dalam memberikan dan meningkatkan kualitas pelayanan untuk mewujudkan senyum sehat masyarakat Indonesia."
          logo={`${process.env.PUBLIC_URL}/image2.png`}
        />
        <FeatureCard
          icon="fas fa-shield-alt"
          title="Protokol Kesehatan"
          description="Klinik gigi joy dental sudah menerapkan protokol kesehatan sehingga pasien dapat perawatan dengan aman dan nyaman."
          logo={`${process.env.PUBLIC_URL}/image3.png`}
        />
      </div>
    </div>
  );
}

const Home = () => {
    const settings = {
        dots: true, // Menampilkan titik navigasi
        infinite: true, // Mengulangi gambar
        speed: 500, // Kecepatan transisi
        slidesToShow: 1, // Menampilkan satu gambar per slide
        slidesToScroll: 1, // Menggeser satu gambar per scroll
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.transition = 'transform 0.3s ease';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
    };

    return (
        <div className="flex flex-col items-stretch justify-between p-5 w-full box-border">
            {/* Container untuk Gambar dan Deskripsi */}
            <div className="flex flex-col md:flex-row items-stretch justify-between w-full">
                <div
                    className="flex-1 w-full md:w-1/2 shadow-lg"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Slider {...settings}>
                        <div>
                            <img
                                src={`${process.env.PUBLIC_URL}/body1.png`}
                                alt="body 1"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>
                        <div>
                            <img
                                src={`${process.env.PUBLIC_URL}/body2.png`}
                                alt="body 2"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>
                        <div>
                            <img
                                src={`${process.env.PUBLIC_URL}/body3.png`}
                                alt="body 3"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>
                    </Slider>
                </div>

                <div
                    className="flex-1 w-full md:w-1/2 pl-5 shadow-lg"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="bg-pink-100 rounded-2xl p-8 shadow-lg h-full text-justify">
                        <h1 className="text-4xl font-bold text-custom-blue mb-4">GI-Care UAD</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                        GiCare UAD adalah program yang menyediakan layanan kesehatan gigi gratis bagi mahasiswa Universitas Ahmad Dahlan (UAD). Program ini bertujuan mempermudah akses pemeriksaan gigi, memberikan edukasi tentang kesehatan gigi, serta meningkatkan kesadaran pentingnya perawatan gigi untuk mencegah masalah kesehatan di masa depan.
                        </p>
                    </div>
                </div>
            </div>
            <FeaturesSection />
        </div>
    );
};

export default Home;
