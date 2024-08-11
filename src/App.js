// --------------------------------------------- task21 to task25-----------------------------------------------

// import React,{useState} from 'react';
// import Task21 from './Task21';
// import Task22 from './Task22';
// import Task24One from './Task24One';
// import Task24Two from './Task24Two';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Task23 from './Task23';
// import Task25 from './Task25';
// import Task25Two from './Task25Two';


// const App = () => {
//   const [userData, setUserData] = useState([]);

//   const addUser = (user) => {
//     console.log(user);
//     setUserData([...userData, user]);
//   };
//   return (
//     <div>
//       <h1>Task 21</h1>
//       <Task21 />
//       <h1>Task 22</h1>
//       <Task22 />
//       <h1>Task 23</h1>
      
//       <h1>Task 24</h1>
//       <Task24One  add={addUser} />
//       <Task24Two />
//       <h1>Task 25</h1>
//       <Task25 />
//       <Task25Two />
//     </div>
//   );
// };

// export default App;



// -----------------------------task26-------------------------------------------------------------------------

import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Movies from './Movies';
import Moviedetails from './Moviedetails';
import './App.css'; 

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Moviedetails />} />
      </Routes>
    </div>
  );
}

export default App;




