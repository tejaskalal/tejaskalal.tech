const Skillbar = () => {
  return (
    <>
      <div className="container" id="skillbar">
        <h2 className="mt-5 text-center fw-bold">Skills</h2>
        <div className="row justify-content-center mt-4">
          <div className="col-md-5 col-sm-12 mb-3">
            <div className=" card text-center shadow-lg border-0 m-3">
              <h5 className="text-center mt-2">Frontend Development</h5>
              <hr></hr>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "75%" }}
                >
                  HTML 75%
                </div>
              </div>

              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "70%" }}
                >
                  CSS 70%
                </div>
              </div>

              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "65%" }}
                >
                  JavaScript 65%
                </div>
              </div>

              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "65%" }}
                >
                  React 65%
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 d-none d-md-block"></div>

          <div className="col-md-5 col-sm-12 mb-3">
            <div className=" card text-center shadow-lg border-0 m-3">
              <h5 className="text-center mt-2">Backend Development</h5>
              <hr></hr>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "60%" }}
                >
                  NodeJS 60%
                </div>
              </div>

              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "55%" }}
                >
                  ExpressJS 55%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-5 col-sm-12 mb-3">
            <div className=" card text-center shadow-lg border-0 m-3">
              <h5 className="text-center mt-2">Database Technology</h5>
              <hr></hr>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "55%" }}
                >
                  MongoDb 55%
                </div>
              </div>

              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "65%" }}
                >
                  SQL 65%
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 d-none d-md-block"></div>

          <div className="col-md-5 col-sm-12 mb-3">
            <div className=" card text-center shadow-lg border-0 m-3">
              <h5 className="text-center mt-2">Programming Language</h5>
              <hr></hr>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "70%" }}
                >
                  Java 70%
                </div>
              </div>

              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "65%" }}
                >
                  Python 65%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-5 col-sm-12 mb-3">
            <div className=" card text-center shadow-lg border-0 m-3">
              <h5 className="text-center mt-2">Libraries</h5>
              <hr></hr>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "60%" }}
                >
                  NumPy 60%
                </div>
              </div>

              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "50%" }}
                >
                  Pandas
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2 d-none d-md-block"></div>

          <div className="col-md-5 col-sm-12 mb-3">
            <div className=" card text-center shadow-lg border-0 m-3">
              <h5 className="text-center mt-2"> Core Concepts</h5>
              <hr></hr>
              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "65%" }}
                >
                  OOP 65%
                </div>
              </div>

              <div className="progress my-3">
                <div
                  className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                  style={{ width: "65%" }}
                >
                  DBMS 65%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillbar;
