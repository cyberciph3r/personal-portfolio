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
          src="/ProjectPreviews/meetease.png"
          liveURL="https://meetease.netlify.app/"
          gitURL="https://github.com/cyberciph3r/MeetEase"
        />
      ),
      desc: (
        <Desc
          title="MeetEase"
          description={
            <div>
              <ul className={classes.ul}>
                <li className={classes.li}>
                  A{" "}
                  <span className={classes.boldTxt}>
                    full-stack web application
                  </span>{" "}
                  that empowers users to seamlessly{" "}
                  <span className={classes.boldTxt}>
                    create and manage appointments
                  </span>
                  .
                </li>
                <li className={classes.li}>
                  Utilized <span className={classes.boldTxt}>MySQL </span>to
                  securely store and manage appointment details and user data,
                  enabling <span className={classes.boldTxt}>CRUD </span>
                  operations on appointments.
                </li>
                <li className={classes.li}>
                  Utilized <span className={classes.boldTxt}>Express.js </span>
                  and <span className={classes.boldTxt}>Node.js </span>to drive
                  the backend, managing routing and establishing{" "}
                  <span className={classes.boldTxt}>RESTful API endpoints</span>
                  .
                </li>
                <li className={classes.li}>
                  Developed a responsive, visually appealing, and user-friendly
                  frontend using <span className={classes.boldTxt}>React</span>,
                  enhanced with the{" "}
                  <span className={classes.boldTxt}>Material UI </span>library.
                </li>
                <li className={classes.li}>
                  Integrated{" "}
                  <span className={classes.boldTxt}>
                    Google Authentication{" "}
                  </span>
                  for heightened security and the acquisition of user
                  information.
                </li>
                <li className={classes.li}>
                  Integrated{" "}
                  <span className={classes.boldTxt}>Google Calendar API </span>
                  to{" "}
                  <span className={classes.boldTxt}>
                    automate event creation{" "}
                  </span>
                  in hosts' Google Calendar upon appointment bookings, with
                  email notifications sent to both hosts and users for event
                  updates.
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
                  with<span className={classes.boldTxt}> Dart </span>as the
                  programming language.
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
                  Utilized
                  <span className={classes.boldTxt}>
                    {" "}
                    Firebase Authentication{" "}
                  </span>
                  for
                  <span className={classes.boldTxt}> user registration </span>
                  and<span className={classes.boldTxt}> authentication</span>.
                </li>

                <li className={classes.li}>
                  Implemented{" "}
                  <span className={classes.boldTxt}> Firebase Firestore </span>
                  as the <span className={classes.boldTxt}> back-end </span>
                  for data storage and efficient message delivery.
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
                  application designed to provide users with a platform to
                  <span className={classes.boldTxt}> anonymously share </span>
                  their deepest<span className={classes.boldTxt}> secrets</span>
                  .
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
                  Integrated{" "}
                  <span className={classes.boldTxt}>
                    Google authentication{" "}
                  </span>
                  for secure user authentication, ensuring privacy, and
                  anonymity.
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
  ];
  return projectDetails;
};

export default ProjectDetails;
