import React, { useState } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Report_isu from "../Pages/Report_isu";
import Donasi from "../Pages/Donasi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home Page");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg transition-all duration-300 ${
          isOpen ? "w-64" : "w-18"
        } h-full border-r border-gray-200`}
      >
        {/* Logo and Toggle Button */}
        <div className="flex items-center justify-between w-full p-3">
          {isOpen && (
            <img
              src="/images/nautika2.png"
              alt="Logo"
              className="w-23 h-16 transition-transform duration-300 mt-2"
            />
          )}
          <button
            onClick={toggleSidebar}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-9 h-9 mt-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="mt-4 flex flex-col items-center w-full">
          <button
            onClick={() => navigateTo("Event")}
            className={`flex items-center px-4 py-3 w-full hover:bg-gray-200 ${
              activePage === "Event" ? "bg-blue-100" : ""
            }`}
          >
            <img src="/images/kalender.svg" alt="Event" className="w-6 h-6" />
            {isOpen && <span className="ml-4 text-gray-700">Event</span>}
          </button>
          <button
            onClick={() => navigateTo("Donasi")}
            className={`flex items-center px-4 py-3 w-full hover:bg-gray-200 ${
              activePage === "Donasi" ? "bg-blue-100" : ""
            }`}
          >
            <img src="/images/donasi.svg" alt="Donasi" className="w-6 h-6" />
            {isOpen && <span className="ml-4 text-gray-700">Donasi</span>}
          </button>
          <button
            onClick={() => navigateTo("Report isu")}
            className={`flex items-center px-4 py-3 w-full hover:bg-gray-200 ${
              activePage === "Report isu" ? "bg-blue-100" : ""
            }`}
          >
            <img src="/images/orang.svg" alt="Report Isu" className="w-6 h-6" />
            {isOpen && <span className="ml-4 text-gray-700">Lapor Isu</span>}
          </button>
          <button
            onClick={() => navigateTo("Setting")}
            className={`flex items-center px-4 py-3 w-full hover:bg-gray-200 ${
              activePage === "Setting" ? "bg-blue-100" : ""
            }`}
          >
            <img
              src="/images/pengaturan.svg"
              alt="Setting"
              className="w-6 h-6"
            />
            {isOpen && <span className="ml-4 text-gray-700">Setting</span>}
          </button>
        </nav>

        {/* Settings and Support at Bottom */}
        <div className="mt-auto mb-4 w-full">
          <button
            onClick={() => navigateTo("Bantuan")}
            className={`flex items-center px-4 py-3 w-full hover:bg-gray-200 ${
              activePage === "Bantuan" ? "bg-blue-100" : ""
            }`}
          >
            <img src="/images/tanya.svg" alt="Bantuan" className="w-6 h-6" />
            {isOpen && <span className="ml-4 text-gray-700">Bantuan</span>}
          </button>
          <button
            onClick={() => navigateTo("Keluar")}
            className={`flex items-center px-4 py-3 w-full hover:bg-gray-200 ${
              activePage === "Keluar" ? "bg-blue-100" : ""
            }`}
          >
            <img src="/images/keluar.svg" alt="Keluar" className="w-6 h-6" />
            {isOpen && <span className="ml-4 text-gray-700">Keluar</span>}
          </button>
        </div>
      </div>

      {/* Main Content Area with Navbar and Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />{" "}
        {/* Insert the Navbar component at the top of the main content */}
        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6">
          {activePage === "Event" && <div>Event</div>}
          {activePage === "Donasi" && (
            <div>
              <Donasi />
            </div>
          )}
          {activePage === "Report isu" && <Report_isu />}{" "}
          {/* Render the Report_isu component */}
          {activePage === "Setting" && <div>Setting</div>}
          {activePage === "Bantuan" && <div>Bantuan</div>}
          {activePage === "Keluar" && <div>Keluar</div>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
