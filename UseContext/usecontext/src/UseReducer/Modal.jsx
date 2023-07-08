import React from 'react'

const Modal = ({modalContent, modalTextColor}) => {
  return (
    <React.Fragment>
      <h2 className={modalTextColor}>{modalContent}</h2>
    </React.Fragment>
  )
}

export default Modal
