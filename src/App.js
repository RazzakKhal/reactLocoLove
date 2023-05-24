import './App.css';
import Accueil from './Accueil/Accueil';
import Header from './Header/Header';
import MyProfil from './MyProfil/MyProfil';
import Gallery from './Gallery/Gallery';
import MyLikes from './MyLikes/MyLikes';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <main>
      <Routes>
          <Route path='/myprofil' element={<MyProfil />} ></Route>
          <Route path='/gallery' element={<Gallery />} ></Route>
          <Route path='/mylikes' element={<MyLikes />} ></Route>    
          <Route path='/' element={<Accueil />} />
      </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
