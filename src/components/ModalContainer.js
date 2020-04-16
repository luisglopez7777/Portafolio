import React from 'react'
import Modal from './Modal'

function ModalContainer(props){
    return(
            <Modal isOpen={props.modalIsOpen} onClose={props.onCloseModal}>
                Lorem Ipsum
            </ Modal>
        )
}
export default ModalContainer