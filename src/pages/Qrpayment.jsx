import React from 'react';

function Qrpayment() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Container untuk menampung judul */}
      <div className="text-center mb-10">
        <h2 className="text-gray-700 font-semibold text-lg">Bayar Sekarang</h2>
      </div>

      {/* Container untuk box putih yang hanya berisi QR Code */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        {/* Gambar QRIS di tengah halaman */}
        <div className="flex justify-center items-center">
          <img src="/images/qris.jpg" alt="QR Code" className="w-100 h-100" />
        </div>
      </div>
    </div>
  );
}

export default Qrpayment;
