import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My learning <span>&</span>
          <br /> journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA Student</h4>
                <h5>Viveka Global University</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Computer Applications (BCA) and
              learning modern web development technologies including
              JavaScript, React.js, Node.js, and MongoDB.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Development</h4>
                <h5>Self Learning</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Learning full stack development using MongoDB, Express.js,
              React.js, and Node.js. Building projects such as authentication
              systems, dashboards, and portfolio websites.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Personal Projects</h4>
                <h5>Practice & Development</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Working on real-world projects including login & registration
              systems, image upload applications, and responsive websites
              using modern web technologies.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;