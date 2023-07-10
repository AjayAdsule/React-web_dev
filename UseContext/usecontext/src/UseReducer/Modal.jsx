import React, { useEffect } from "react";

const Modal = ({ modalContent, modalTextColor, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <React.Fragment>
      <h2 className={modalTextColor} style={{ textAlign: "center" }}>
        {modalContent}
      </h2>
    </React.Fragment>
  );
};

export default Modal;
