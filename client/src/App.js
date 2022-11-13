import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Singers from './pages/Singers';
import Musicians from './pages/Musicians';
import MusicLabels from './pages/MusicLabels';
import Trending from './pages/Trending';
import Profile from './pages/Profile';
import PostWork from './pages/PostWork';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/trending' element={<Trending/>} />
      <Route path='/singers' element={<Singers/>} />
      <Route path='/musicians' element={<Musicians/>} />
      <Route path='/musiclabels' element={<MusicLabels/>} />
      <Route path='/musiclabels' element={<MusicLabels/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/publish' element={<PostWork/>} />
    </Routes>
    </div>
  );
}

export default App;
