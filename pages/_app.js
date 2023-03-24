import "../styles/tailwind.css";
import "../styles/globals.css";
import React,{useState} from "react";
import ResumeButton from '../components/ui/ResumeButton'
import ResumeDialog from "../components/ResumeDialog"

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
      <ResumeButton handleOpen={handleClickOpen}/>
      {open &&
        <ResumeDialog
        open={open}
        handleClose={handleClose}
      />
      }
    </>
  );
}

export default MyApp;
