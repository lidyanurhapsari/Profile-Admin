import React, { useState } from "react";

function Adminp() {
  // Define state for each input field
  const [firstName, setFirstName] = useState("Galih");
  const [lastName, setLastName] = useState("Raditya");
  const [email, setEmail] = useState("galihraditya@gmail.com");
  const [phone, setPhone] = useState("+6285155225048");
  const [domicile, setDomicile] = useState("Kediri");

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Profil</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500 text-sm">19 May 2022</span>
          <img
            src="/images/profileadm.jpg" // Replace with your image URL
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Profile Banner */}
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        <div className="w-full h-40 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-lg"></div>
        <div className="flex flex-col items-center -mt-16">
          <img
            src="/images/profileadm.jpg" // Replace with your profile image URL
            alt="Profile"
            className="h-24 w-24 rounded-full border-4 border-white"
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-2">Galih Raditya</h2>
          <p className="text-gray-500 text-sm">user123</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Edit Profil
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-lg mt-6 p-4">
        <div className="flex space-x-8 border-b border-gray-200 mb-4">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-2">Detail Profil</button>
          <button className="text-gray-500 hover:text-gray-700">Edit Profil</button>
          <button className="text-gray-500 hover:text-gray-700">Ganti Kata Sandi</button>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 text-sm">Nama Depan</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Nama Belakang</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-600 text-sm">No. Hp</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-600 text-sm">Domisili</label>
            <input
              type="text"
              value={domicile}
              onChange={(e) => setDomicile(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminp;
