// import Login from './login'

import './App.css';
// import './login.css';
import Homenav from './homenav';
import './homenav.css';
import Hero from './hero';
import './hero.css'
import Hometodo from './hometodo';
import './hometodo.css'
// import Contactus from './contactus';
// import './contactus.css'
// import Footer from './footer';
// import './footer.css'


function App() {
  return (
    <div className="App">


      {/* <Login/> */}
       <Homenav/>
      <Hero/>
      <Hometodo/>
      {/* <Contactus/>
      <Footer/>  */}

    </div>
  );
}

export default App;
