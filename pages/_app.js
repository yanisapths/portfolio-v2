import "../styles/tailwind.css";
import "../styles/globals.css";
import React, { useState } from "react";
import ResumeDialog from "../components/ResumeDialog";
import FloatingSocial from "../components/FloatingSocial";
import { Montserrat } from 'next/font/google'
import { Homemade_Apple } from 'next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
const homemadeApple = Homemade_Apple({
  subsets: ['latin'],
  variable: '--font-HomemadeApple',
  weight: ['400'],
})

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
      {open && <ResumeDialog open={open} handleClose={handleClose} />}
      <FloatingSocial handleOpen={handleClickOpen} />
    </>
  );
}

export default MyApp;
