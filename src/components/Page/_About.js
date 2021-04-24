import React from "react";

const SocialIconMap = {
  LinkedIn: "fa-linkedin-in",
  Instagram: "fa-instagram",
  Twitter: "fa-twitter",
  Facebook: "fa-facebook-f",
  GitHub: "fa-github"
};

const About = ({ Name, Location, Phone, Email, Description, Socials }) => {
  return (
    <>
      {/* <!-- About--> */}
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            {Name.split(" ")[0]}
            <span className="text-primary"> {Name.split(" ")[1]}</span>
          </h1>
          <div className="subheading mb-5">
            {Location} · {Phone} · <a href={"mailto:" + Email}>{Email}</a>
          </div>
          <p className="lead mb-5">{Description}</p>
          <div className="social-icons">
            {Object.keys(Socials).map(
              social =>
                Socials[social] && (
                  <a
                    className="social-icon"
                    href={Socials[social]}
                    key={social}
                  >
                    <i className={"fab " + SocialIconMap[social]}></i>
                  </a>
                )
            )}
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};

export default About;
