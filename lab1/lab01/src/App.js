import './App.css';
import React, { useReducer } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import AppContext from './data/AppContext';
import AppReducer from './data/AppReducer';
import { data } from './data/module-data';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import Lab4 from './pages/Lab4';
import AddForm from './pages/AddForm';
import EditForm from './pages/EditForm';
import Home from './pages/Home';
// import { data } from './module-data';
// import PersonProfile from './components/PersonProfile';

const App = () => {
  const [state, appDispatch] = useReducer(AppReducer, data);

  const menuItems = [
    { id: 1, label: "Home", url: "/" },
    { id: 2, label: "Laboratorium 1", url: "/lab1" },
    { id: 3, label: "Laboratorium 2", url: "/lab2" },
    { id: 4, label: "Laboratorium 3", url: "/lab3" },
    { id: 5, label: "Laboratorium 4", url: "/lab4" },
    { id: 6, label: "Laboratorium 4 Add", url: "/lab4/add" },
    { id: 7, label: "Laboratorium 4 Edit", url: "/lab4/edit/:1" }
  ];

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
        <RootLayout items={menuItems}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lab1" element={<Lab1 />} />
            <Route path="/lab2/:id" element={<Lab2 />} />
            <Route path="/lab3" element={<Lab3 />} />
            <Route path="/lab4" element={<Lab4 />} />
            <Route path="/lab4/add" element={<AddForm />} />
            <Route path="/lab4/edit/:id" element={<EditForm />} />
          </Routes>
        </RootLayout>
    </AppContext.Provider>
  );
};

export default App;
