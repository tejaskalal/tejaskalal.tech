import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Contact = () => {
  const handleClick = (platform) => {
    let url = "";

    switch (platform) {
      case "instagram":
        url =
          "https://www.instagram.com/_programmmertejas_?igsh=ZmFvZW43cjltaDhn";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/tejaskalal";
        break;
      case "github":
        url = "https://github.com/tejaskalal";
        break;
      case "email":
        url = "mailto:tejaskalal2002@gmail.com";
        break;
      default:
        return;
    }

    window.open(url, "_blank");
  };

  return (
    <div className="container text-center mt-5" id="contact">
      <h2 className="fw-bold">Contact Me</h2>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleClick("instagram")}
        >
          <FaInstagram />
        </button>

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

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleClick("email")}
        >
          <GoMail />
        </button>
      </div>
    </div>
  );
};

export default Contact;
