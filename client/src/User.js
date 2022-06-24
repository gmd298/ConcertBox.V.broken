import React from 'react';
import {useNavigate,} from "react-router-dom"

function User(){
  let navigate = useNavigate();
  return (
    <>
      <div>
        Your Profile Page
        <button onClick={() => {navigate("/musicians")}}>Musicians</button>
      </div>
    </>
    );
}
export default User;