import React from 'react'
import './styles/NotFound.css'

class NotFound extends React.Component {
    render(){
        return(
            <div className="error__structure">
                <div className="structure__container">
                    <h2 className="error__title"><a href="/">404.</a>That´s an error</h2>
                    <h3 className="error__description"><a href="/">The requested URL was not found on this server. That’s all I know.</a></h3>
                </div>
            </div>
        )
    }
}

export default NotFound