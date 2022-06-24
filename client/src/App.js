import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import NavBar from './NavBar';
import Home from './Home';
import Musician from './Musician';
import Concert from './Concert';
import User from './User';
import Login from './Login';
import ErrorPage from './ErrorPage';
// import ViewContainer from './components/ViewContainer';

function App() {
  const [currentUser, setCurrentUser] = useState("");

  //// autoLogin
  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if(res.ok){
        res.json().then((user) => setCurrentUser(user))
      } 
    })
  }, [])
  
  if(!currentUser) return <Login set currentUser={setCurrentUser} />
////

  return (
    <>
      <BrowserRouter>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Routes>
          <Route path="/*">
            <Route index element={<Home />} />
          </Route>
          <Route path="/concerts" element={<Concert />} />
          <Route path="/musicians" element={<Musician />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
