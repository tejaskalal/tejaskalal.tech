const Hobbies = () => {
  return (
    <div className="container">
      <h2 className="mt-5 text-center fw-bold">Hobbies</h2>

      <div className="row justify-content-center mt-4">
        <div className="col-md-10 col-sm-12 mb-3">
          <div
            className="card  shadow-lg border-0 m-3 text-center"
            style={{ height: "120px", lineHeight: "25px" }}
          >
            <ul className="list-unstyled mb-0">
              <li>🏋️ Doing exercise and staying fit</li>
              <li>⚽ Playing outdoor games</li>
              <li>💻 Solving problems through code</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
