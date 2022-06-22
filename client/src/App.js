import React from 'react';
import "./index.css";
import NavBar from './NavBar';
import Home from './Home';
import Musician from './Musician';
import Concert from './Concert';
import User from './User';
// import ViewContainer from './components/ViewContainer';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>;
      break
    case "/musician":
      component = <Musician />;
      break
    case "/Concert":
      component = <Concert />;
      break
    case "/users":
      component = <User />;
      break
    }
  return (
    <>
      <NavBar />
      <div className="container">{component}</div>
    </>
  );
}

export default App;

// import React from 'react';
// import "./index.css";
// import NavBar from './NavBar';
// import Home from './Home';
// import Musician from './Musician';
// import Concert from './Concert';
// import User from './User';
// import { Route, Routes } from "react-router-dom"

// function App() {

//   return (
//     <>
//       <NavBar />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/musician" element={<Musician />} />
//           <Route path="/concert" element={<Concert />} />
//           <Route path="/user" element={<User />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;