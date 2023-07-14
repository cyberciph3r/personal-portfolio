import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Typography,
  TextField,
  TextareaAutosize,
  Button,
  CircularProgress,
} from "@material-ui/core";
import useStyles from "./styles";
import Navbar from "../Navbar/Navbar";
import FadeIn from "react-fade-in/lib/FadeIn";
import BackHome from "../BackHome/BackHome";
import { useState } from "react";

const Contact = () => {
  const classes = useStyles();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_qjz87cl",
        "template_8lh87jf",
        form.current,
        "P7bOmY8qN-0xfaoxa"
      )
      .then(
        (result) => {
          alert("Your message has been sent.");
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          alert("Error. Try again");
          setIsSending(false);
        }
      );
  };
  return (
    <div className={classes.mainDiv}>
      {/* <div className={classes.bgImage}></div> */}
      <Navbar page="contact" />
      <BackHome />

      {/* <Typography className={classes.bg} style={{ top: "1rem" }}>
        CONTACT ME
      </Typography>
      <Typography className={classes.bg} style={{ top: "74%" }}>
        CONTACT ME
      </Typography> */}

      <form ref={form} onSubmit={sendEmail} className={classes.formStyle}>
        <FadeIn>
          <Typography className={classes.heading}>Get in Touch!</Typography>
        </FadeIn>
        <FadeIn>
          <TextField
            className={classes.input}
            label="Your Name"
            variant="filled"
            type="text"
            name="from_name"
            InputLabelProps={{
              classes: {
                root: classes.label,
                focused: classes.labelFocused,
              },
            }}
          />
        </FadeIn>
        <FadeIn>
          <TextField
            className={classes.input}
            label="Your Email"
            variant="filled"
            type="email"
            name="user_email"
            InputLabelProps={{
              className: classes.label,
            }}
          />
        </FadeIn>
        <TextareaAutosize
          name="message"
          placeholder="Your Message"
          minRows={10}
          maxRows={15}
          className={classes.txtarea}
        />
        <FadeIn>
          <Button type="submit" className={classes.btn}>
            {isSending ? <CircularProgress /> : "SEND"}
          </Button>
        </FadeIn>
      </form>
    </div>
  );
};

export default Contact;
