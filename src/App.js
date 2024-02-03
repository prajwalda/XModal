import "./App.css";
import { useState } from "react";
import XModal from "./XModal.js";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalOpenBackground, setModalOpenBackground] = useState(false);

  const modalBackground = {
    height: "100vh",
    backdropFilter: modalOpenBackground ? "blur(1px)" : "none", // Apply backdrop-filter conditionally
    transition: "backdrop-filter 0.3s ease", // Add a smooth transition effect
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={modalBackground}>
      <h1>User Details Modal</h1>
      <button
        className="modalTrigger"
        onClick={() => {
          setIsOpenModal(true);
          setModalOpenBackground(true);
        }}
      >
        Open Form
      </button>
      {isOpenModal && (
        <XModal
          setIsOpenModal={setIsOpenModal}
          setModalOpenBackground={setModalOpenBackground}
        />
      )}
    </div>
  );
}

export default App;
