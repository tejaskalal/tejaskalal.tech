import tejasPdf from "../assets/tejas-portfolio-resume.pdf";
const Header = () => {
  return (
    <header
      className="d-flex justify-content-center align-items-center py-3 border-bottom sticky-top"
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "#f8f9fa",
        zIndex: 9999,
      }}
    >
      <ul
        className="nav"
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          fontSize: "20px",
          gap: "20px",
          display: "flex",
        }}
      >
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#skillbar" className="nav-link">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#education" className="nav-link">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contacts
          </a>
        </li>
        <li className="nav-item">
          <a
            href={tejasPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
