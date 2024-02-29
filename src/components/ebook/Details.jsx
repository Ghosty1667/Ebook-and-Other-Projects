import description from "../../assests/description.png";
import author from "../../assests/author.png";

function Details() {
  return (
    <>
      <section id="details" className="details my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container d-flex flex-column justify-content-center h-100">
                <h2 className="display-6">Unlock Your Blogging Potential</h2>
                <p>
                  Welcome to our diverse blogging platform, where we offer a
                  wide range of insightful and engaging content! Our community
                  of talented and passionate bloggers shares unique
                  perspectives, experiences, and expertise across various
                  interests, catering to tech enthusiasts, travel junkies,
                  foodies, and those focused on personal development. Navigate
                  our user-friendly interface to discover the latest trends,
                  thought-provoking discussions, and helpful tips. Join the
                  conversation by commenting, sharing, and connecting with
                  fellow readers and bloggers.
                </p>
                <ul className="list-group list-group-flush lh-lg">
                  <li className="list-group-item">
                    <i className="bi bi-square-fill text-primary"></i>
                    <strong>
                      Navigate through our user-friendly interface
                    </strong>
                    to discover the latest trends, thought-provoking
                    discussions, and helpful tips.
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-square-fill text-primary"></i>
                    <strong>Start your journey with us today </strong>and let
                    the blogging experience enrich your online exploration!
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-square-fill text-primary"></i>
                    <strong>We believe in the power of words</strong> to create
                    connections, foster understanding, and spark positive
                    change.
                  </li>
                </ul>
                <a
                  className="btn btn-primary text-white mt-4 align-self-start"
                  data-bs-toggle="modal"
                  data-bs-target="#modal1"
                >
                  Get Your Copy now!
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container p-5">
                <img src={description} alt="test" className="img-fluid p-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="modal1" className="modal fade">
        <div className="modal-dialog modal-lg mt-7">
          <div className="modal-content p-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-container">
                  <img src={description} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-container">
                  <h2 className="display-6">Unlock Your Blogging Potential</h2>
                  <p>
                    Welcome to our diverse blogging platform, where we offer a
                    wide range of insightful and engaging content! Our community
                    of talented and passionate bloggers shares unique
                    perspectives, experiences
                  </p>
                  <ul className="list-group list-group-flush lh-lg">
                    <li className="list-group-item">
                      <i className="bi bi-square-fill text-primary"></i>
                      <strong>
                        Navigate through our user-friendly interface
                      </strong>
                      to discover the latest trends, thought-provoking
                      discussions, and helpful tips.
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-square-fill text-primary"></i>
                      <strong>Start your journey with us today </strong>and let
                      the blogging experience enrich your online exploration!
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-square-fill text-primary"></i>
                      <strong>We believe in the power of words</strong> to
                      create connections, foster understanding, and spark
                      positive change.
                    </li>
                    <a href="" className="btn btn-primary text-white">
                      Free Download
                    </a>
                    <button className="btn btn-light" data-bs-dismiss="modal">
                      Close
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="statement mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-container bg-light.p-5.rounded-5">
                <h2>Unlock Your Blogging Potential</h2>
                <p>
                  Welcome to our diverse blogging platform, where we offer a
                  wide range of insightful and engaging content! Our community
                  of talented and passionate bloggers shares unique
                  perspectives, experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statement mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-container p-5">
                <img src={author} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-container d-flex flex-column justify-content-center h-100">
                <h2 className="display-6">Craft Remarkable Content</h2>
                <p>
                  Welcome to our diverse blogging platform, where we offer a
                  wide range of insightful and engaging content! Our community
                  of talented and passionate bloggers shares unique
                  perspectives, experiences, and expertise across various
                  interests, catering to tech enthusiasts, travel junkies,
                  foodies, and those focused on personal development. Navigate
                  our user-friendly interface to discover the latest trends,
                  thought-provoking discussions, and helpful tips. Join the
                  conversation by commenting, sharing, and connecting with
                  fellow readers and bloggers.
                </p>
                <ul className="list-group list-group-flush lh-lg">
                  <li className="list-group-item">
                    <i className="bi bi-square-fill text-primary"></i>
                    <strong>
                      Navigate through our user-friendly interface
                    </strong>
                    to discover the latest trends, thought-provoking
                    discussions, and helpful tips.
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-square-fill text-primary"></i>
                    <strong>Start your journey with us today </strong>and let
                    the blogging experience enrich your online exploration!
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-square-fill text-primary"></i>
                    <strong>We believe in the power of words</strong> to create
                    connections, foster understanding, and spark positive
                    change.
                  </li>
                </ul>
                <a
                  className="btn btn-primary text-white mt-4 align-self-start"
                  data-bs-toggle="modal"
                  data-bs-target="#modal2"
                >
                  Learn More!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="modal2" className="modal fade">
        <div className="modal-dialog modal-lg mt-7">
          <div className="modal-content p-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-container">
                  <img src={author} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-container">
                  <h2 className="display-6">Craft Remarkable Content </h2>
                  <p>
                    Welcome to our diverse blogging platform, where we offer a
                    wide range of insightful and engaging content! Our community
                    of talented and passionate bloggers shares unique
                    perspectives, experiences
                  </p>
                  <ul className="list-group list-group-flush lh-lg">
                    <li className="list-group-item">
                      <i className="bi bi-square-fill text-primary"></i>
                      <strong>
                        Navigate through our user-friendly interface
                      </strong>
                      to discover the latest trends, thought-provoking
                      discussions, and helpful tips.
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-square-fill text-primary"></i>
                      <strong>Start your journey with us today </strong>and let
                      the blogging experience enrich your online exploration!
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-square-fill text-primary"></i>
                      <strong>We believe in the power of words</strong> to
                      create connections, foster understanding, and spark
                      positive change.
                    </li>
                    <a href="" className="btn btn-primary text-white">
                      Free Download
                    </a>
                    <button className="btn btn-light" data-bs-dismiss="modal">
                      Close
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
