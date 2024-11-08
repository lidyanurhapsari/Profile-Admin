import React from 'react';

const notifications = [
  {
    id: 1,
    type: 'Volunteer Registration',
    name: 'Galih Raditya',
    email: 'Galihraditya@gmail.com',
    title: 'Pencemaran Sungai Brantas',
    message: 'Saya ingin melaporkan kondisi Sungai Brantas di Gresik ...',
    date: '28 Juni 2024',
    avatar: 'https://via.placeholder.com/80', // replace with actual avatar URL
  },
  {
    id: 2,
    type: 'Issue Report',
    name: 'Bernadya',
    email: 'blmadabln@gmail.com',
    title: 'Pencemaran Sungai Cipayung',
    message: 'Saya ingin melaporkan kondisi Sungai Brantas di Gresik ...',
    date: '10 Mei 2024',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    id: 3,
    type: 'Donation',
    name: 'Galih Raditya',
    email: 'Galihraditya@gmail.com',
    title: 'Pencemaran Sungai Brantas',
    message: 'Saya ingin melaporkan kondisi Sungai Brantas di Gresik ...',
    date: '28 Juni 2024',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    id: 4,
    type: 'Donation',
    name: 'Galih Raditya',
    email: 'Galihraditya@gmail.com',
    title: 'Pencemaran Sungai Brantas',
    message: 'Saya ingin melaporkan kondisi Sungai Brantas di Gresik ...',
    date: '28 Juni 2024',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    id: 5,
    type: 'Donation',
    name: 'Galih Raditya',
    email: 'Galihraditya@gmail.com',
    title: 'Pencemaran Sungai Brantas',
    message: 'Saya ingin melaporkan kondisi Sungai Brantas di Gresik ...',
    date: '28 Juni 2024',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    id: 6,
    type: 'Donation',
    name: 'Galih Raditya',
    email: 'Galihraditya@gmail.com',
    title: 'Pencemaran Sungai Brantas',
    message: 'Saya ingin melaporkan kondisi Sungai Brantas di Gresik ...',
    date: '28 Juni 2024',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    id: 7,
    type: 'Donation',
    name: 'Galih Raditya',
    email: 'Galihraditya@gmail.com',
    title: 'Pencemaran Sungai Brantas',
    message: 'Saya ingin melaporkan kondisi Sungai Brantas di Gresik ...',
    date: '28 Juni 2024',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    id: 8,
    type: 'Donation',
    name: 'Galih Raditya',
    email: 'Galihraditya@gmail.com',
    title: 'Pencemaran Sungai Brantas',
    message: 'Saya ingin melaporkan kondisi Sungai Brantas di Gresik ...',
    date: '28 Juni 2024',
    avatar: 'https://via.placeholder.com/80',
  },
];

function NotificationItem({ notification }) {
  return (
    <div className="flex items-start bg-white p-4 shadow-md rounded-lg mb-4">
      <div className="flex-shrink-0">
        <span className="block w-4 h-4 bg-red-500 rounded-full mt-1.5 mr-3"></span>
      </div>
      <img
        className="w-12 h-12 rounded-full object-cover mr-4"
        src={notification.avatar}
        alt="Avatar"
      />
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-gray-800 font-semibold">{notification.name}</h4>
            <p className="text-gray-500 text-sm">{notification.email}</p>
          </div>
          <p className="text-gray-400 text-sm">{notification.date}</p>
        </div>
        <h5 className="text-blue-600 font-medium mt-2">{notification.title}</h5>
        <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
      </div>
    </div>
  );
}

function Notifikasia() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl">
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Notifikasi</h2>
          <div className="h-96 overflow-y-scroll pr-2 space-y-4">
            {notifications.map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifikasia;
