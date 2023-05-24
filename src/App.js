import './App.css';
import Accueil from './Accueil/Accueil';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <main>
        <Accueil></Accueil>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
