import "../styles/tailwind.css";
import "../styles/globals.css";
import React, { useState } from "react";
import ResumeDialog from "../components/ResumeDialog";
import FloatingSocial from "../components/FloatingSocial";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Component {...pageProps} />
      <style>
        @import
        url(&apos;https://fonts.googleapis.com/css2?family=Montserrat&display=swap&apos;);
        @import
        url(&apos;https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap&apos;);
      </style>
      {open && <ResumeDialog open={open} handleClose={handleClose} />}
      <FloatingSocial handleOpen={handleClickOpen} />
    </>
  );
}

export default MyApp;
