function Testimonials() {
  return (
    <>
      <section className="testimonials mb-8">
        <div className="container">
          <div className="row">
            <div className="col md-4 text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="men1"
                className="rounded-circle mb-3"
              />
              <p className="lead fst-italic">
                &quote; The ebook allow me to publish my book to a new audience.
                Greatly improving my outreach. I highly recommend it! &quote;
              </p>
              <p className="fw-bold">Bill Right - Brisbane</p>
            </div>
            <div className="col md-4 text-center">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="men1"
                className="rounded-circle mb-3"
              />
              <p className="lead fst-italic">
                &quote; The ebook allow me to publish my book to a new audience.
                Greatly improving my outreach. I highly recommend it! &quote;
              </p>
              <p className="fw-bold">Samira Smith - Brisbane</p>
            </div>
            <div className="col md-4 text-center">
              <img
                src="https://randomuser.me/api/portraits/men/31.jpg"
                alt="men1"
                className="rounded-circle mb-3"
              />
              <p className="lead fst-italic">
                &quote; The ebook allow me to publish my book to a new audience.
                Greatly improving my outreach. I highly recommend it! &quote;
              </p>
              <p className="fw-bold">Ryan Face - Sydney</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
