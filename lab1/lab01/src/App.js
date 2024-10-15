import './App.css';
import { data } from './module-data';
import PersonProfile from './PersonProfile';

function App() {
  return (
    <div className="App">
      <h1>People Profiles</h1>
      {/* Iterowanie po tablicy danych i renderowanie komponentu dla każdego obiektu */}
      {data.map((person) => (
        <PersonProfile
          key={person.id} // Klucz unikalny dla każdego elementu
          id={person.id}
          name={person.name}
          birth={person.birth}
          eyes={person.eyes}
        />
      ))}
    </div>
  );
}

export default App;
