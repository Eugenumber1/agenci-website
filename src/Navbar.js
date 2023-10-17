export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        AgencI
      </a>
      <ul>
        <CustomLink href="pricing">Pricing</CustomLink>
        <CustomLink href="about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  if (path === href) {
    console.log("they are the same");
  }
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}