import "../styles/tailwind.css";
import "../styles/globals.css";
import React,{useState} from "react";
import ResumeDialog from "../components/ResumeDialog"
import FloatingNavigator from "../components/FloatingNavigator";

function MyApp({ Component, pageProps }) {
  const [open,setOpen] =useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Component {...pageProps} />
      {open &&
        <ResumeDialog
        open={open}
        handleClose={handleClose}
      />
      }
      <FloatingNavigator handleOpen={handleClickOpen} />
    </>
  );
}

export default MyApp;
