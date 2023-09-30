// import Login from './login'

// import './App.css';
import Completed from './completed';
import './completed.css'
import Inprogress from './inprogress';
import './inprogress.css'
import Todoadd from './todoadd';
import './todoadd.css'
import Todonav from './todonav';
import './todonav.css'
import Todopage from './todopage';
import './todopage.css'
// import './login.css';
// import Homenav from './homenav';
// import './homenav.css';
// import Hero from './hero';
// import './hero.css'
// import Hometodo from './hometodo';
// import './hometodo.css'
// import Contactus from './contactus';
// import './contactus.css'
// import Footer from './footer';
// import './footer.css'


function App() {
  return (
    <div className="App">


      {/* <Login/> */}
      {/* <Homenav/>
      <Hero/>
      <Hometodo/>
      <Contactus/>
      <Footer/> */}
      <Todonav/>
      <Todopage/>
      <Todoadd/>
      <Inprogress/>
      <Completed/>

    </div>
  );
}

export default App;
