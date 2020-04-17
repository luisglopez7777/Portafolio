import React from 'react'
import Modal from './Modal'

function ModalContainer(props){
    return(
            <Modal isOpen={props.modalIsOpen} onClose={props.onCloseModal}>
                <div>
                    <h1>Lorem Ipsum</h1>
                    <p>Informacion</p>
                </div>
            </ Modal>
        )
}
export default ModalContainer