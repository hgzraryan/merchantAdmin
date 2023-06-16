import React from 'react'
import './../dist/css/modal.css'
import  ReactDOM  from 'react-dom'

function Modal({children,show,closeModal}) {
    if(!show) return null
  return ReactDOM.createPortal(
    <>
        <div className = "modal">
          <div className='overlay' onClick={closeModal} ></div>  
            <div className='content'>
                <h2>Modal Title</h2>
                {children}
                <button onClick={closeModal}>close modal</button>
            </div>  
        </div>
    </>,
    document.getElementById("modal-root")
  )
}

export default Modal
