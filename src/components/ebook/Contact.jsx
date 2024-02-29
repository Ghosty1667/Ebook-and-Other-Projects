import thing from "../../assests/header-ebook.png";

function Contact() {
  return (
    <>
      <header className="header">
        <div className="hero text-white pt-7 pb-4">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <h1>Contact Information</h1>
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

      <section className="contact bg-light pb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="name"
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="message"
                    name="email"
                    rows={6}
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary text-white mt-3"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map my-5">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <h3>Our Location</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod ligula nec ligula bibendum, vitae cursus dui
                fringilla. Sed quis est vel justo feugiat bibendum. Integer
                dapibus lectus sit amet sem varius, eget consectetur sem
                vestibulum. Suspendisse id justo vel quam interdum efficitur.
                Curabitur et justo id nisi pellentesque tincidunt. Nam aliquam
                sem eget dui volutpat, vel lobortis dui feugiat. Maecenas
                euismod, dolor vitae convallis dignissim, odio arcu imperdiet
                turpis, eu fringilla arcu quam at metus. Fusce facilisis sem eu
                velit efficitur, eu ullamcorper quam efficitur.
              </p>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.5303553091994!2d-0.14076024298621118!3d51.51210217963597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d502268421%3A0x6a7d62889992f993!2sRegent+St%2C+Soho%2C+London+W1B+5TH%2C+UK!5e0!3m2!1sen!2sro!4v1476174541049"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
