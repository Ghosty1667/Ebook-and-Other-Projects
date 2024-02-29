import React from "react";
import NavBar from "../components/Navbar";

function Review() {
  return (
    <>
      <NavBar />
      <div className="container-sm">
        <div className="card shadow-lg rounded-4 border-0 mt-5">
          <div className="card-body">
            <div className="row p-5">
              <div className="col-7">
                <h3 className="fw-bold">What other thinks about the product</h3>
              </div>
              <div className="col-5">
                <div className="card">
                  <div className="card-body">
                    <h3 className=" display-5 fw-semibold">
                      <i className="bi-star-fill text-warning"></i> 3.7
                    </h3>
                    <p className="text-center">Average Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-5">
            <div className="col-12">
              <div className="input-group input-group-lg">
                <span className="input-group-text rounded-start-5">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  className="form-control rounded-end-5"
                  placeholder="Search Reviews"
                ></input>
              </div>
            </div>
            <div className="row p-5">
              <div className="col-12 vstack gap-2">
                <h5>Ratings</h5>
                <div className="d-flex align-items-center gap-1">
                  <span>5</span>
                  <i className="bi bi-star-fill text-warning"></i>
                  <div
                    className="progress ms-3"
                    style={{ height: "10px", width: "100%" }}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "42%" }}
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <span>4</span>
                  <i className="bi bi-star-fill text-warning"></i>
                  <div
                    className="progress ms-3"
                    style={{ height: "10px", width: "100%" }}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "17%" }}
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <span>3</span>
                  <i className="bi bi-star-fill text-warning"></i>
                  <div
                    className="progress ms-3"
                    style={{ height: "10px", width: "100%" }}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "79%" }}
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <span>2</span>
                  <i className="bi bi-star-fill text-warning"></i>
                  <div
                    className="progress ms-3"
                    style={{ height: "10px", width: "100%" }}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "53%" }}
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <span>1</span>
                  <i className="bi bi-star-fill text-warning"></i>
                  <div
                    className="progress ms-3"
                    style={{ height: "10px", width: "100%" }}
                  >
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "6%" }}
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-5 pb-4">
              <div className="col-12">
                <a href="#" className="btn btn-success btn-lg rounded-5">
                  Write Review
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
