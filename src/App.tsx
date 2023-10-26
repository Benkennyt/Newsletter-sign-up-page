import React, { useState } from "react";
import "./App.css";
import ListIcon from "./assets/images/icon-list.svg";
import EmailInput from "./component/EmailInput";
import SignUpDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import Popup from "./component/Popup";
import SignUpMobile from "./assets/images/illustration-sign-up-mobile.svg";
import useWindowResize from "./Hooks/useWindowResize";

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const [getMail, setGetMail] = useState('')

  const {width, height} = useWindowResize();

  const handleDismissButton = () => {
    setModalOpen(false)
  }

  return (
    <div className="App">
      {width! < 460 && modalOpen
      ? 
      <>
        {<Popup onDismiss={handleDismissButton} mail={getMail}  />} 
      </>
      :
      <>
        {modalOpen && <Popup onDismiss={handleDismissButton} mail={getMail} />}
        <div className="signup-mobile">
          <img src={SignUpMobile} alt="sign-up-desktop" />
        </div>
        <div className="stay-updated">
          <h1> Stay updated! </h1>
          <div className="list-j">
            <p> Join 60,000+ product managers recieving monthly updates on:</p>
            <ul>
              <img src={ListIcon} alt="icon-list" /> Product discovery and
              building what matters
            </ul>
            <ul>
              <img src={ListIcon} alt="icon-list" /> Measuring to ensure updaates
              are a success
            </ul>
            <ul>
              <img src={ListIcon} alt="icon-list" /> And much more!
            </ul>
          </div>
          <EmailInput  setModalOpen={setModalOpen} setGetMail={setGetMail} />
        </div>
        <div className="signup-desktop">
          <img src={SignUpDesktop} alt="sign-up-desktop" />
        </div>
      </>
      }
    </div>
  );
}

export default App;
