import React from 'react'

import '../global.css'

import Britania from '../images/britania.jpg'
import Casi90 from '../images/casi90.png'
import Komando from '../images/Komando.jpg'
import Linkedin from '../images/linkedin.jpeg'
import LuisSays from '../images/luisSays.png'
import Platzi from '../images/platzi.png'
import YourJuan from '../images/yourjuan.png'

// import ModalContainer from '../components/ModalContainer'
import Modal from '../components/Modal'


class Home extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
        }
    }   
    handleOnOpen = () => this.setState({isOpen: true})

    handleOnClose = () => this.setState({isOpen: false})


      render () {
          return(
        <React.Fragment>
            <div className="header__menu">
                <h1>luisglopez7777</h1>
            </div>

            <div className="structure">
                <div className="structure__container">
                    <h2>Welcome! Here you can find and interact with my personal projects.</h2>
                    <h3>EVERYTHING done by me. Hope you enjoy it</h3>
                </div>
            </div>

            <div className="carousel">
                <div className="carousel__container">
                    

                    <div className="carousel-item" onClick={ () => this.handleOnOpen()}>
                        <img src={Britania} alt="logo" className="carousel-item__img"/>  
                        <Modal 
                            isOpen={this.state.isOpen} 
                            onClose={this.handleOnClose} 
                             >
                            <h2>Titulo del proyecto</h2>
                            <p>Descripcion</p>
                        </ Modal>
      
                    </div>  

                    <div className="carousel-item" onClick={ () => this.handleOnOpen(Casi90)} >
                        {/* <Modal isOpen={this.state.isOpen} onClose={this.handleOnClose} children={this.state.children}/> */}
                        <img src={Casi90} alt="logo" className="carousel-item__img"/>
                    </div>

                    <div className="carousel-item">
                        <img src={Komando} alt="logo" className="carousel-item__img"/>
                    </div>

                    <div className="carousel-item">
                        <a href="https://www.linkedin.com/in/luis-gerardo-l%C3%B3pez-a92726107/" target="_new">
                            <img src={Linkedin} alt="logo" className="carousel-item__img"/>
                        </a>
                    </div>

                    <div className="carousel-item">
                        <a href="https://luisglopez7777.github.io/luisSays/" target="_new">
                            <img src={LuisSays} alt="logo" className="carousel-item__img"/>
                            </a>                   
                    </div>

                    <div className="carousel-item">
                        <img src={Platzi} alt="logo" className="carousel-item__img"/>
                    </div>

                    <div className="carousel-item">
                        <a href="https://www.yourjuaninmexico.com/" target="_new">
                            <img src={YourJuan} alt="logo" className="carousel-item__img"/>
                        </a>
                    </div>
                </div>
            </div>
            {/* <Modal isOpen={this.state.isOpen} onClose={this.handleOnClose} */}
        </React.Fragment>
          )
        }
}

  export default Home

