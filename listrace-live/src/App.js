import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './Component/About';
import Howitworks from './Component/Howitworks';
import Explore from './Component/Explore';
import Reviwe from './Component/Reviwe';
import Blog from './Component/Blog';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/howitworks' element={<Howitworks/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/reviwe' element={<Reviwe/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
