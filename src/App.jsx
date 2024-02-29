import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="div row mt-5">
          <div className="col-md-6">
            <div className="card rounded-4 shadow-lg  mb-5">
              <div className="card-body">
                <div>
                  <h4 className="fw-bold">Free</h4>
                  <p className="text-muted">For Freelancers</p>
                  <h2 className="fs-1 fw-bold mt-4 mb-5">$0</h2>
                  <ul className="list-group list-group-flush fs-5 mb-5 vstack gap-2">
                    <li className="list-group-item border-0">
                      <i className="bi bi-check2"></i>Single User
                    </li>
                    <li className="list-group-item border-0">
                      <i className="bi-check2"></i>10 download per month
                    </li>
                    <li className="list-group-item border-0">
                      <i className="bi bi-check2"></i>Faster files
                    </li>
                  </ul>
                  <div className="d-grid">
                    <button className="btn btn-dark rounded-4 mt-5 mb-5 mb-4">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card text-bg-dark rounded-4 shadow-lg  mb-5">
              <div className="card-body">
                <div>
                  <h4 className="fw-bold">Pro</h4>
                  <p className="text-white">For Agents</p>
                  <h2 className="fs-1 fw-bold mt-4 mb-5">$100</h2>
                  <ul className="list-group list-group-flush fs-5 mb-5 vstack gap-2">
                    <li className="list-group-item border-0 text-bg-dark">
                      <i className="bi bi-check2"></i>Unlimited User
                    </li>
                    <li className="list-group-item border-0 text-bg-dark">
                      <i className="bi-check2"></i>Unlimited Download
                    </li>
                    <li className="list-group-item border-0 text-bg-dark">
                      <i className="bi bi-check2"></i>Fully Editible Files
                    </li>
                  </ul>
                  <div className="d-grid">
                    <button className="btn btn-light rounded-4 mt-5 mb-5 mb-4">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
