import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/agenci-website/home" className="site-title">
        AgencI
      </Link>
      <ul>
        <CustomLink to="/agenci-website/pricing">Pricing</CustomLink>
        <CustomLink to="/agenci-website/about">About</CustomLink>
        <CustomLink to="/agenci-website/projects">Projects</CustomLink>
      </ul>
    </nav>
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
