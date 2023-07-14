import Image from "./Image/Image";
import Desc from "./Desc/Desc";
import useStyles from "./detailsStyles";
import React from "react";

const ProjectDetails = () => {
  const classes = useStyles();

  const projectDetails = [
    {
      image: (
        <Image
          src="/ProjectPreviews/ckrets.jpg"
          liveURL="https://ckrets.netlify.app/"
          gitURL="https://github.com/cyberciph3r/Ckrets"
        />
      ),
      desc: (
        <Desc
          title="Ckrets"
          description={
            <div>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  A captivating{" "}
                  <span className={classes.boldTxt}>full-stack (MERN)</span> web
                  application designed to provide individuals with a platform to
                  <span className={classes.boldTxt}> anonymously share </span>
                  their deepest secrets ensuring utmost
                  <span className={classes.boldTxt}> privacy </span>and freedom
                  of expression.
                </li>
                <li className={classes.li}>
                  Utilized<span className={classes.boldTxt}> MongoDB </span>to
                  securely
                  <span className={classes.boldTxt}> store and manage </span>
                  user posts.
                </li>
                <li className={classes.li}>
                  Developed a visually appealing and user-friendly frontend
                  using<span className={classes.boldTxt}> React</span>, enhanced
                  with the
                  <span className={classes.boldTxt}> Material-UI library</span>,
                  for a modern and polished UI design.
                </li>
                <li className={classes.li}>
                  The upcoming reactions feature will enable users to engage
                  with others' posts.
                </li>
                <li className={classes.li}>
                  <span className={classes.boldTxt}>
                    Google authentication{" "}
                  </span>
                  has been implemented to ensure
                  <span className={classes.boldTxt}> reaction integrity </span>
                  and prevent duplication or spamming, providing a secure and
                  authentic environment. Users' privacy and anonymity are
                  preserved, guaranteeing a safe space for expression.
                </li>
                <li className={classes.li}>
                  Utilized<span className={classes.boldTxt}> Node.js </span>and
                  <span className={classes.boldTxt}> Express.js </span>to power
                  the backend, enabling efficient
                  <span className={classes.boldTxt}>
                    {" "}
                    server-side processing
                  </span>
                  , <span className={classes.boldTxt}>routing</span>, and
                  creation of
                  <span className={classes.boldTxt}> RESTful API </span>{" "}
                  endpoints for seamless communication with the frontend.
                </li>
              </ul>
            </div>
          }
        />
      ),
    },
    {
      image: (
        <Image
          src="/ProjectPreviews/tt.jpg"
          liveURL="https://triptrove.netlify.app/"
          gitURL="https://github.com/cyberciph3r/TripTrove"
        />
      ),
      desc: (
        <Desc
          title="TripTrove"
          description={
            <div>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  A web application designed to provide users with
                  <span className={classes.boldTxt}>
                    {" "}
                    comprehensive details{" "}
                  </span>
                  of nearby
                  <span className={classes.boldTxt}> dining spots</span>,
                  <span className={classes.boldTxt}> accommodations</span>, and{" "}
                  <span className={classes.boldTxt}> attractions</span>,
                  enabling them to easily access and explore
                  <span className={classes.boldTxt}> the best options </span>
                  around them.
                </li>
                <li className={classes.li}>
                  Utilized Rapid API's Travel Advisor API to fetch comprehensive
                  and reliable data on nearby restaurants, hotels, and
                  attractions.
                </li>
                <li className={classes.li}>
                  Integrated
                  <span className={classes.boldTxt}> Google Maps API</span> to
                  create an
                  <span className={classes.boldTxt}> interactive map </span>
                  interface, allowing users to discover nearby establishments as
                  they explore the map.
                </li>
                <li className={classes.li}>
                  Utilized
                  <span className={classes.boldTxt}> Google Places API </span>
                  to implement a
                  <span className={classes.boldTxt}> place search </span>
                  feature, enabling users to search for specific locations and
                  retrieve updated details relevant to the searched place.
                </li>
                <li className={classes.li}>
                  Developed a visually appealing and user-friendly frontend
                  using<span className={classes.boldTxt}> React</span>, enhanced
                  with the
                  <span className={classes.boldTxt}> Material-UI library</span>,
                  for a modern and polished UI design.
                </li>
              </ul>
            </div>
          }
        />
      ),
    },
    {
      image: (
        <Image
          src="/ProjectPreviews/wa1.jpg"
          liveURL=""
          gitURL="https://github.com/cyberciph3r/wassApp"
          isWA="true"
        />
      ),
      desc: (
        <Desc
          title="WassApp"
          description={
            <div>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  A <span className={classes.boldTxt}>Flutter</span>-based
                  <span className={classes.boldTxt}>
                    {" "}
                    group chat mobile application
                  </span>{" "}
                  with Dart as the programming language.
                </li>
                <li className={classes.li}>
                  Established a seamless and connected chat experience, ensuring
                  all users can actively engage and communicate within a unified
                  environment.
                </li>
                <li className={classes.li}>
                  Implemented
                  <span className={classes.boldTxt}> real-time messaging </span>
                  functionality, allowing instant exchange of messages.
                </li>
                <li className={classes.li}>
                  Utilized{" "}
                  <span className={classes.boldTxt}> Firebase Firestore </span>
                  as the <span className={classes.boldTxt}> back-end </span>
                  for secure account creation, reliable data storage, and
                  efficient message delivery.
                </li>
              </ul>
            </div>
          }
        />
      ),
    },
    {
      image: (
        <Image
          src="/ProjectPreviews/pw.jpg"
          liveURL="https://varun-personal-portfolio.netlify.app"
          gitURL="https://github.com/cyberciph3r/personal-portfolio"
        />
      ),
      desc: (
        <Desc
          title="Portfolio."
          description={
            <div>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  My
                  <span className={classes.boldTxt}> Personal Portfolio </span>
                  website.
                </li>
                <li className={classes.li}>
                  Frontend:
                  <span className={classes.boldTxt}> React</span>,{" "}
                  <span className={classes.boldTxt}> Three.js </span> (
                  <span className={classes.boldTxt}>React-Three-Fiber</span>),{" "}
                  <span className={classes.boldTxt}> Material-UI</span>
                </li>
              </ul>
            </div>
          }
        />
      ),
    },
  ];
  return projectDetails;
};

export default ProjectDetails;
