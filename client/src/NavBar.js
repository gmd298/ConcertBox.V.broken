import React from "react";


function NavBar() {

  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Concert Box
      </a>
      <ul>
        <li className="active">
          <a href="/musician">Musicians</a>
        </li>
        <li>
          <a href="/concert">Concert</a>
        </li>
        <li>
          <a href="/user">User</a>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props}) {
  const path = window.location.pathname
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  )
}

export default NavBar;

// import React from "react";
// import {Link, useMatch, useResolvedPath} from "react-router-dom";

// function NavBar() {

//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         Concert Box
//       </Link>
//       <ul>
//         <CustomLink to="/musician">Musicians</CustomLink>
//         <CustomLink to="/concert">Concerts</CustomLink>
//         <CustomLink to="/user">User</CustomLink>
//       </ul>
//     </nav>
//   );
// }

// function CustomLink({ to, children, ...props}) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({path: resolvedPath.pathname})
//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>{children}</Link>
//     </li>
//   )
// }

// export default NavBar;