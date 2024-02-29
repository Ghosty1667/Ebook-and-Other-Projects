import thing from "../../assests/header-ebook.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="hero text-white pt-7">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-6">
                <div className="image-container mb-5 px4">
                  <img src={thing} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5">
                  <h1 className="display-3 fw-bold">Welcome to my page</h1>
                  <p className="lead">
                    Somebody once told me the world is gonna roll me I
                    ain&apos;t the sharpest tool in the shed She was looking
                    kind of dumb with her finger and her thumb In the shape of
                    an &quot;L&quot; on her forehead
                  </p>
                  <div className="form-container text-center">
                    <form>
                      <div className="my-4">
                        <input
                          type="email"
                          className="form-control form-control-lg rounded-5"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg text-white">
                          Free Download
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="frame-decoration"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1920 180.275"
        >
          <title>frame-decoration</title>
          <path
            className="cls-1"
            d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
            transform="translate(0 -158.755)"
          />
        </svg>
      </header>
    </>
  );
}

export default Header;
