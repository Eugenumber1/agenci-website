import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <Link to="" className="text-wrapper">
        AgencI
      </Link>
      <div className="navbar">
        <CustomLink to="process" className="text-wrapper-2">
          Process
        </CustomLink>
        <CustomLink to="projects" className="text-wrapper-3">
          Clients
        </CustomLink>
        <CustomLink to="about" className="text-wrapper-4">
          Contact Us
        </CustomLink>
      </div>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  //   if (path === to) {
  //     console.log("they are the same");
  //   }
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

// <nav className="nav">
//   <Link to="home" className="site-title">
//     AgencI
//   </Link>
//   <ul>
//     <CustomLink to="process">Process</CustomLink>
//     <CustomLink to="about">About</CustomLink>
//     <CustomLink to="projects">Projects</CustomLink>
//   </ul>
// </nav>
