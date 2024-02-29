function Social() {
  return (
    <>
      <section className="social text-bg-dark py-6 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center fs-4">
              <p>To stay informed, join our community. For any Questions</p>
              <div className="social-icons d-flex justify-content-center gap-4">
                <i className="bi bi-facebook" style={{ fontSize: "3rem" }}></i>
                <i className="bi bi-linkedin" style={{ fontSize: "3rem" }}></i>
                <i className="bi bi-instagram" style={{ fontSize: "3rem" }}></i>
                <i className="bi bi-discord" style={{ fontSize: "3rem" }}></i>
                <i className="bi bi-github" style={{ fontSize: "3rem" }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Social;
