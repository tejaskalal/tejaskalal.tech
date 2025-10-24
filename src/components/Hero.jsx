import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import heroImg from "../assets/tejas.png";

const Hero = () => {
  const handleClick = (platform) => {
    let url = "";

    switch (platform) {
      case "linkedin":
        url = "https://www.linkedin.com/in/tejaskalal";
        break;
      case "github":
        url = "https://github.com/tejaskalal";
        break;
      default:
        return;
    }

    window.open(url, "_blank");
  };

  return (
    <div className="container" id="hero">
      <div className="row align-items-center flex-column flex-md-row mt-5">
        <div className="col-md-6 col-12 text-center text-md-start">
          <h1 className="typing-text" style={{ fontSize: "80px" }}>
            Hello,
          </h1>
          <h3 style={{ fontSize: "50px" }}>I'm Tejas Kalal</h3>
          <h2 style={{ fontSize: "35px" }}>Software Developer</h2>
          <p style={{ fontSize: "25px" }}>
            Building solutions that make life simpler, one line of code at a
            time.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleClick("linkedin")}
            >
              <FaLinkedinIn />
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleClick("github")}
            >
              <FaGithub />
            </button>
          </div>
        </div>
        <div className="col-md-6 col-12 text-center mt-4 mt-md-0">
          <img
            src={heroImg}
            alt="tejas-img"
            className="img-fluid"
            style={{ maxHeight: "380px", borderRadius: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
