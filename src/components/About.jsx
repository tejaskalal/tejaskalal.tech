import { SlCalender } from "react-icons/sl";
import { MdLanguage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const About = () => {
  return (
    <div className="container" id="about">
      <h2 className="mt-5 text-center fw-bold">About Me</h2>

      <div className="row justify-content-center mt-4">
        <div className="col-md-5 col-sm-12 mb-3">
          <div className="card text-center shadow-lg border-0 p-3">
            <h5 className="text-center">Professional Summary</h5>
            <hr />

            <p style={{ textAlign: "justify" }}>
              I'm a passionate Software Developer with expertise in creating
              dynamic and responsive websites. I love coding and continuously
              learning new technologies to enhance my skills.
            </p>

            <p style={{ textAlign: "justify" }}>
              Aspiring Software Developer with a solid foundation in Python,
              SQL, and the MERN stack, eager to apply strong analytical and
              problem-solving skills to real-world projects. Passionate about
              learning and contributing to a dynamic team environment. Seeking
              an opportunity to start my career where I can grow technically and
              deliver impactful solutions.
            </p>
          </div>
        </div>

        <div className="col-md-2 d-none d-md-block"></div>
        <div className="col-md-5 col-sm-12 mb-3">
          <div className="card shadow-lg border-0 p-3">
            <h5 className="text-center mt-2">Personal Details</h5>
            <hr />

            <ul className="list-unstyled">
              <li className="about-details mb-2">
                <SlCalender className="me-2" />
                <strong>Date of Birth:</strong> 25/10/2002
              </li>
              <li className="about-details mb-2">
                <MdLanguage className="me-2" />
                <strong>Languages:</strong> English, Hindi, Marathi
              </li>
              <li className="about-details mb-2">
                <CiLocationOn className="me-2" />
                <strong>Nationality:</strong> Indian
              </li>
              <li className="about-details">
                <CiLocationOn className="me-2" />
                <strong>Location:</strong> Pune, Maharashtra
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
