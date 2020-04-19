import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'

function Modal(props){

    const { isOpen, onClose, children} = props

    if(!isOpen){
        return null
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button 
                    className="Modal__close-button"
                    onClick={onClose}>
                        X
                </button>
                <img src={children} alt='img' />
            </div>
        </div>, 
        document.body
            // document.getElementById('modal')
    )
}

export default Modal