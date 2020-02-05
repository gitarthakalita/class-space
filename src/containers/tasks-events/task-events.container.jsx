import React from 'react';
import TaskViewContainer from '../task-view/task-view.container';

class TaskEventsContainer extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    };

    render() {
        return (
            <div className="task-event-container">


                <div className="header task-event-header">

                    <div className="heading">
                        Task / Event
                    </div>

                    <div>
                        <p>
                            Get access to all the Assignments, Events, Tasks and Tests.
                        </p>

                    </div>
                </div>

                <div className="task-event-item">
                    <div className="tsk-evnt">
                    <TaskViewContainer/>
                    </div>
                </div>

                



            </div>
        )
    }
}


export default TaskEventsContainer;