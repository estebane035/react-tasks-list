import PropTypes from 'prop-types'
import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            { tasks.length > 0 
                ? tasks.map( task =>  <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/> )
                : <h3>No task to show</h3>
            }
        </>
    )
}

Tasks.defaultProps = {
    tasks: [],
    onDelete: null,
    onToggle: null,
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
}

export default Tasks
