import propTypes from 'prop-types'

function UserGreeeting(props) {

    return(
        props.isLoggedIn ? <h1 className="welcome-message">Welcome back, {props.username}!</h1> :
                           <h1 className="login-prompt">Please sign up.</h1>
    )
}

UserGreeeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string
}

UserGreeeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeeting