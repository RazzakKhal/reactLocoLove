import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import MyProfil from './MyProfil/MyProfil';
import Gallery from './Gallery/Gallery';
import MyLikes from './MyLikes/MyLikes';
import { Routes, Route } from 'react-router-dom';
import OtherProfil from './OtherProfil/OtherProfil';
import Tchat from './Tchat/Tchat';

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
          <Route path='/otherProfil/:id' element={<OtherProfil></OtherProfil>}></Route>
          <Route path='/tchat/:id' element={<Tchat />}></Route>
          <Route path='/' element={<Home />} />
          
      </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
