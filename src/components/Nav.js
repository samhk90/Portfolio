
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand px-1" id='navtext' to="/">
          Md.Samee Shaikh
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <a className="nav-link" id='navtext' aria-current="page" to="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" id='navtext' aria-current="page" to="/about">
                About
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" id='navtext' aria-current="page" to="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
