import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showFormTask}) => {
    return (
        <header className="header">
            <h1>{ title }</h1>
            <Button color={showFormTask ? 'red' : 'green'} text={showFormTask ? 'Cancel' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task list",
    onAdd: null,
    showFormTask: false,
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func,
    showFormTask: PropTypes.bool,
}

export default Header;
