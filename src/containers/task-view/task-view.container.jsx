import React from 'react';

import TASK_DATA from '../../data/tasks.data';
import TaskComponent from '../../components/task/task.component';

class TaskViewContainer extends React.Component {
    constructor(){
        super();

        this.state={
            task_data: TASK_DATA,
            
        }
    }


    render() {
        return(
            <div className="taskview-container">
                {this.state.task_data.map(({task_title, task_id}) => (
                    <TaskComponent
                        key={task_id}
                        title={task_title}

                        
                    />
                ))}
            </div>
        )
    }
}

export default TaskViewContainer;