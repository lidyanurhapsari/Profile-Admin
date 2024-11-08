import React from 'react';

function Donasi() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Judul di luar box putih */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mari Bantu Para Pejuang!</h2>

      {/* Box putih untuk konten */}
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        {/* Image Row */}
        <div className="grid grid-cols-1 gap-2 mb-6">
          <img src="/images/gambar.jpg" alt="volunteer1" className="w-full h-full object-cover rounded-lg" />
        </div>

        <p className="text-black mb-4">
          Donasi ini akan sepenuhnya digunakan untuk mendukung kelancaran kegiatan Volunteer. Setiap kontribusi Anda akan membantu menyediakan peralatan, logistik, serta edukasi lingkungan bagi peserta, demi menjaga kebersihan sungai dan melindungi ekosistem setempat. Terima kasih atas dukungan Anda!
        </p>

        {/* Donation Amount Selection */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-black mb-2">Pilih Nominal</h3>
          <div className="grid grid-cols-3 gap-2">
            <button className="py-2 px-4 bg-white text-black font-semibold rounded-lg border border-blue-200">IDR. 10.000</button>
            <button className="py-2 px-4 bg-white text-black font-semibold rounded-lg border border-blue-200">IDR. 25.000</button>
            <button className="py-2 px-4 bg-white text-black font-semibold rounded-lg border border-blue-200">IDR. 50.000</button>
            <button className="py-2 px-4 bg-white text-black font-semibold rounded-lg border border-blue-200">IDR. 75.000</button>
            <button className="py-2 px-4 bg-white text-black font-semibold rounded-lg border border-blue-200">IDR. 100.000</button>
            <button className="py-2 px-4 bg-white text-black font-semibold rounded-lg border border-blue-200">IDR. 200.000</button>
          </div>
        </div>

        {/* Custom Donation Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Nominal Lainnya</label>
          <input
            type="number"
            placeholder="IDR"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            min="10000"
          />
          <p className="text-sm text-gray-500 mt-1">*minimal nominal IDR.10.000</p>
        </div>

        {/* Payment Button */}
        <button className="w-1/3 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
          Lanjutkan Pembayaran
        </button>
      </div>
    </div>
  );
}

export default Donasi;
