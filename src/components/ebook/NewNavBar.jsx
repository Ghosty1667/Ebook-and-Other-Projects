function NewNavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            <i
              className="bi bi bi-book-half text-secondary"
              style={{ fontSize: "2rem" }}
            >
              <span className="text-white  mx-2">E-book</span>
            </i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#test" className="nav-link ">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#details" className="nav-link fw-semibold">
                  Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/e-book/contact"
                  className="nav-link btn border border-1 nohover fw-semibold px-4 mx-4"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hidden">Test</div>
    </>
  );
}

export default NewNavBar;
