import React from 'react';

function Proses() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl flex">
        <div className="p-8 w-1/2">
          <h2 className="text-xl font-semibold mb-6">Lengkapi Identitas Anda</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Nama Donatur:</label>
              <input
                type="text"
                id="name"
                placeholder="Masukkan nama anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Donatur:</label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-" htmlFor="phone">Nomor Telepon:</label>
              <div className="flex">
                <select className="px-1 py-2 border border-gray-300 rounded-l-lg bg-gray-100 focus:outline-none">
                  <option value="+62" >+62</option>
                  <option value="+60" >+60</option>
                  <option value="+65" >+65</option>
                  <option value="+66" >+66</option>
                  <option value="+63" >+63</option>
                  <option value="+36" >+36</option>
                  <option value="+39" >+39</option>
                  <option value="+81" >+81</option>
                  <option value="+82" >+82</option>
                  <option value="+90" >+90</option>
                  <option value="+44" >+44</option>
                  <option value="+1" >+1</option>
                  <option value="+41" >+41</option>
                  <option value="+64" >+64</option>
                  <option value="+31" >+31</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Masukkan Nomor Telepon anda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="donation">Donasi Anda</label>
              <input
                type="text"
                id="donation"
                placeholder="Masukan Nominal"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="hide" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
              <label htmlFor="hide" className="ml-2 text-gray-700">Sembunyikan</label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Kontribusi Donasi
            </button>
          </form>
        </div>
        <div className="p-8 w-1/2 flex items-center justify-center">
          <img src="/images/proses.jpg" alt="Donate" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Proses;
