import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAddTask}) => {

    return (
        <header className ='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red' : 'green'} onClick={onAdd} text={showAddTask ? 'Close' : 'Add'} />
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