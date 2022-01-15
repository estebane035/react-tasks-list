import PropTypes from 'prop-types'
import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        // Validation
        if(!text){
            alert('Please add task');
            return;
        }

        // Create task object
        onAdd({
            text,
            day,
            reminder
        });

        // Clear inputs
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="task">Task</label>
                <input type="text" placeholder='Add a task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="day">Day & Time</label>
                <input type="text" placeholder='Day & Time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="reminder">Set reminder</label>
                <input type="checkbox" checked={reminder}  onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input className='btn btn-block' type="submit" value="Save task"/>
        </form>
    )
}

AddTask.defaultProps = {
    onAdd: null,
}

AddTask.propTypes = {
    onAdd: PropTypes.func,
}

export default AddTask
