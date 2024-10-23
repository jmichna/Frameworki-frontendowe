import React from 'react';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

const RootLayout = ({ children }) => {
  const menuItems = [
    { id: 1, label: 'Home', url: "/" },
    { id: 2, label: 'Laboratorium 1', url: "/lab1" },
    { id: 3, label: 'Laboratorium 2', url: "/lab2/1" },
    { id: 4, label: 'Laboratorium 3', url: "/lab3"}
  ];

  return (
    <div>
      <NavBarMenu items={menuItems} />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;