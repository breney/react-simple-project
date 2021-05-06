import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClick  = (event) => {
        console.log(event)
    }

    return (
        <header className ='header'>
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}
/** CSS Style in JavaScript

<h1 style={headingStyle}>{props.title}</h1>

const headingStyle = {
    color : 'red', 
    backgroundColor: 'black'
}
 */

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header