const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      percentage: "6.59 CGPA",
      year: "2021 - 2025",
      institution: "Sinhgad College of Engineering",
    },
    {
      degree: "12th Standard (HSC)",
      percentage: "80.83%",
      year: "2021",
      institution: "Maharashtra State Board of Higher Secondary Education",
    },
    {
      degree: "10th Standard (SSC)",
      percentage: "86.00%",
      year: "2019",
      institution: "Maharashtra State Board",
    },
  ];

  const educationCard = ({ degree, percentage, year, institution }, index) => (
    <div className="row justify-content-center mt-4">
      <div className="col-md-10 col-sm-12 mb-3 text-center">
        <div className="card  shadow-lg border-0 m-3">
          <h5 className="mt-2">{degree}</h5>
          <p className="mb-1">{percentage}</p>
          <p className="mb-1">{year}</p>
          <p className="text-muted">{institution}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container" id="education">
      <h2 className="mt-5 text-center fw-bold">Education</h2>
      {educationData.map((edu) => (
        <div key={edu.degree}>{educationCard(edu)}</div>
      ))}
    </div>
  );
};

export default Education;
