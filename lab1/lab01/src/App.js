import './App.css';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import NotFound from './pages/NotFound';
// import { data } from './module-data';
// import PersonProfile from './components/PersonProfile';

function App() {
  const menuItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
      urlPattern: "/",
      element: <Home />,
    },
    {
      id: 2,
      label: "Laboratorium 1",
      url: "/lab1",
      urlPattern: "/lab1",
      element: <Lab1 />,
    },
    {
      id: 3,
      label: "Laboratorium 2",
      url: "/lab2/1", // Domyślna osoba z id 1
      urlPattern: "/lab2/:id", // Obsługa parametru id
      element: <Lab2 />,
    },
    {
      id: 4,
      label: "Not Found",
      urlPattern: "/*",
      element: <NotFound />,
    },
  ];

  return (
    // <div className="App">
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route key={item.id} path={item.urlPattern} element={item.element} />
          ))}
        </Routes>
      {/* <h1>People Profiles</h1>
      {data.map((person) => (
        <PersonProfile
          key={person.id}
          id={person.id}
          name={person.name}
          birth={person.birth}
          eyes={person.eyes}
        />
      ))} */}
      </RootLayout>
    // </div>
  );
}

export default App;
