import NavBar from "../components/Navbar";
import "../App.css";

function UserList() {
  return (
    <>
      <NavBar />
      <header className="mb-5">
        <div className="container mt-5">
          <div className="d-flex justify-content-end">
            <div className="btn-group">
              <button
                className="btn btn-secondary btn-sm"
                data-bs-theme-value="dark"
              >
                Dark
              </button>
              <button
                className="btn btn-light btn-sm"
                data-bs-theme-value="light"
              >
                Light
              </button>
            </div>
          </div>
          <h1 className="mb-4">User</h1>
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search Users"
              />
            </div>
            <div
              id="Test"
              className="user-menu col-md-8 d-flex align-items-center"
            >
              <ul className="nav">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Reputation
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link text-bg-primary rounded-3">
                    New Users
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Editors
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Moderator
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="card mb-3"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-content="Email: johnDoe@gmail.com"
              >
                <div className="card-body">
                  <div className="d-flex gap-3">
                    <div className="user-img">
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="user-info">
                      <h4>John Doe</h4>
                      <h6>Brisbane QLD</h6>
                      <span className="badge bg-primary">Cooking</span>
                      <span className="badge bg-primary">Reading</span>
                      <span className="badge bg-primary">Writing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card mb-3"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-content="Email: lelah@gmail.com"
              >
                <div className="card-body">
                  <div className="d-flex gap-3">
                    <div className="user-img">
                      <img
                        src="https://randomuser.me/api/portraits/women/75.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="user-info">
                      <h4>Lelah</h4>
                      <h6>Sydney QLD</h6>
                      <span className="badge bg-primary">Fashion</span>
                      <span className="badge bg-primary">Stem</span>
                      <span className="badge bg-primary">Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card mb-3"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-content="Email: lelah@gmail.com"
              >
                <div className="card-body">
                  <div className="d-flex gap-3">
                    <div className="user-img">
                      <img
                        src="https://randomuser.me/api/portraits/men/74.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="user-info">
                      <h4>Smith</h4>
                      <h6>Sydney QLD</h6>
                      <span className="badge bg-primary">Working</span>
                      <span className="badge bg-primary">Stem</span>
                      <span className="badge bg-primary">Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card mb-3"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-content="Email: lelah@gmail.com"
              >
                <div className="card-body">
                  <div className="d-flex gap-3">
                    <div className="user-img">
                      <img
                        src="https://randomuser.me/api/portraits/men/72.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="user-info">
                      <h4>Smith</h4>
                      <h6>Sydney QLD</h6>
                      <span className="badge bg-primary">Working</span>
                      <span className="badge bg-primary">Stem</span>
                      <span className="badge bg-primary">Hiking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card mb-3"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-content="Email: Billy@gmail.com"
              >
                <div className="card-body">
                  <div className="d-flex gap-3">
                    <div className="user-img">
                      <img
                        src="https://randomuser.me/api/portraits/women/72.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="user-info">
                      <h4>Billy</h4>
                      <h6>Newcastle NSW</h6>
                      <span className="badge bg-primary">Sports</span>
                      <span className="badge bg-primary">Reading</span>
                      <span className="badge bg-primary">Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default UserList;
