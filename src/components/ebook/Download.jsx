import EbookDownload from "../../assests/download-ebook.png";

function Download() {
  return (
    <>
      <section className="download">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="image-container mt-n6 mb-5">
                <img src={EbookDownload} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="text-container text-white d-flex flex-column justify-content-center h-100 mb-5">
                <h2 className="fw-bold">Get your Ebook for Free</h2>
                <p>
                  Welcome to our diverse blogging platform, where we offer a
                  wide range of insightful and engaging content! Our community
                  of talented and passionate bloggers shares unique.
                </p>

                <form action="">
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                    <button className="btn btn-primary text-white rounded-end">
                      Download
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
