import './App.css';
import Blog from './React-Template/Blog/Blog.jsx';
import Explore from './React-Template/Explore/Explore.jsx';
import Footer from './React-Template/Footer/Footer.jsx';
import Header from './React-Template/Header/Header.jsx';
import Listtopic from './React-Template/Listtopic/Listtopic.jsx';
import Reviwe from './React-Template/Reviwe/Reviwe.jsx';
import Statistics from './React-Template/Statistics/Statistics.jsx';
import Subscription from './React-Template/Subscription/Subscription.jsx';
import Topsection from './React-Template/Top/Topsection.jsx';
import Welcome from './React-Template/Welocome/Welcome.jsx';
import Works from './React-Template/Works/Works.jsx';


function App() {
  return (
    <div className="App">
     <Header/>
     <Topsection/>
     <Welcome/>
     <Listtopic/>
     <Works/>
     <Explore/>
     <Reviwe/>
     <Statistics/>
     <Blog/>
     <Subscription/>
     <Footer/>
    </div>
  );
}

export default App;
