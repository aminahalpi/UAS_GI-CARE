import React, { useState, useEffect } from 'react';
import './Reservasi.css';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../Firebase';

const Reservasi = () => {
  const [reservasiList, setReservasiList] = useState([]); // Daftar reservasi
  const [formData, setFormData] = useState({
    nama: '',
    jadwal: '',
    dokter: '',
    perawatan: '',
    keluhan: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Mengambil data reservasi dari Firestore
  useEffect(() => {
    const fetchReservasi = async () => {
      const querySnapshot = await getDocs(collection(db, 'reservasi'));
      const reservasiData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReservasiList(reservasiData);
    };

    fetchReservasi();
  }, []);

  // Menyimpan atau mengupdate reservasi
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);  // Debugging data yang dimasukkan

    try {
      if (isEditing) {
        const reservasiDoc = doc(db, 'reservasi', editId);
        await updateDoc(reservasiDoc, formData);
        console.log('Data berhasil diupdate');
        setIsEditing(false);
      } else {
        await addDoc(collection(db, 'reservasi'), formData);
        console.log('Data berhasil disimpan');
      }
    } catch (error) {
      console.error('Error menyimpan data:', error);
    }

    setFormData({ nama: '', jadwal: '', dokter: '', perawatan: '', keluhan: '' }); // Reset form
  };

// Mengedit reservasi
const handleEdit = (id) => {
    const reservasi = reservasiList.find(item => item.id === id);
    setFormData(reservasi);
    setIsEditing(true);
    setEditId(id);
  };
  
  // Menghapus reservasi
  const handleDelete = async (id) => {
    try {
      const reservasiDoc = doc(db, 'reservasi', id);
      await deleteDoc(reservasiDoc);
      setReservasiList(reservasiList.filter(item => item.id !== id));
      console.log('Data berhasil dihapus');
    } catch (error) {
      console.error('Error menghapus data:', error);
    }
  };
  
  // Daftar dokter dan perawatan
  const dokterList = ['Dr. Andi', 'Dr. Sari', 'Dr. Budi'];
  const perawatanList = ['Scaling Gigi', 'Pemasangan Behel', 'Pencabutan Gigi', 'Bleaching Gigi'];

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="reservasi-container">
      <h1>Reservasi Dokter</h1>
      <form onSubmit={handleSubmit} className="reservasi-form">
        <input
          type="text"
          name="nama"
          placeholder="Nama Anda"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <select name="jadwal" value={formData.jadwal} onChange={handleChange} required>
          <option value="">Pilih Jadwal</option>
          <option value="Senin, 10:00 - 12:00">Senin, 10:00 - 12:00</option>
          <option value="Rabu, 14:00 - 16:00">Rabu, 14:00 - 16:00</option>
          <option value="Jumat, 08:00 -  10:00">Jumat, 08:00 - 10:00</option>
        </select>
        <select name="dokter" value={formData.dokter} onChange={handleChange} required>
          <option value="">Pilih Dokter</option>
          {dokterList.map((dokter, index) => (
            <option key={index} value={dokter}>
              {dokter}
            </option>
          ))}
        </select>
        <select name="perawatan" value={formData.perawatan} onChange={handleChange} required>
          <option value="">Pilih Perawatan</option>
          {perawatanList.map((perawatan, index) => (
            <option key={index} value={perawatan}>
              {perawatan}
            </option>
          ))}
        </select>
        <textarea
          name="keluhan"
          placeholder="Keluhan (Opsional)"
          value={formData.keluhan}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn-submit">
          {isEditing ? 'Update Reservasi' : 'Tambah Reservasi'}
        </button>
      </form>
  
      <div className="reservasi-list">
        {reservasiList.length > 0 ? (
          <ul>
            {reservasiList.map((reservasi) => (
              <li key={reservasi.id} className="reservasi-item">
                <h3>{reservasi.nama}</h3>
                <p>Jadwal: {reservasi.jadwal}</p>
                <p>Dokter: {reservasi.dokter}</p>
                <p>Perawatan: {reservasi.perawatan}</p>
                {reservasi.keluhan && <p>Keluhan: {reservasi.keluhan}</p>}
                <div className="reservasi-actions">
                  <button onClick={() => handleEdit(reservasi.id)} className="btn-edit">Edit</button>
                  <button onClick={() => handleDelete(reservasi.id)} className="btn-delete">Hapus</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Belum ada reservasi.</p>
        )}
      </div>
    </div>
  );
  
};

export default Reservasi;
