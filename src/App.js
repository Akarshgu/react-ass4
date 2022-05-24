
import './App.css';
import Student from './Component/Student.js'
import Contact from './Component/Contact.js'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './Component/Home.js';
import './Component/Style.css'
function App() {
  return (
    <BrowserRouter>
    
      <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
          <div style={{color:"white" ,marginRight:"30vw", fontSize:"150%"}}> Welcome  </div>
          <div><Link to="/"><button className='btn btn-outline-light'>Home </button></Link></div>
          <div><Link to={'/Student'}><button className='btn btn-outline-light'>Student </button></Link></div>
          <div><Link to={'Contact'}><button className='btn btn-outline-light'>Contact  </button></Link></div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Student' element={<Student/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
