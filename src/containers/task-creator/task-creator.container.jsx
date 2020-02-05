import React from 'react';

class TaskCreatorContainer extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    };

    render() {
        return (
            <div className="task-creator-container">


                <div className="header task-creator-header">

                    <div className="heading">
                        Tasks / Assignments Creator
                    </div>

                    <div>
                        <p>
                            Create Assignments, Events, Tasks and Tests.
                        </p>

                    </div>
                </div>

                <div className='task-creator'>
                <div className="task-creator-item">
                    <form className="form-control">

                        <div className="form-group">
                            <label >Task / Assignment Title :  </label>
                            <input type="text" name="resource title"></input>
                        </div>
                        <div className="form-group">
                            <label >Task / Assignment Description :  </label>
                            <textarea type="text" name="resource title"></textarea>
                        </div>

                        <div className="form-group">
                            <label >  Category :  </label>
                            <select type="dropdown" name="resource content category ">
                                <option value="Assignments" >Assignments</option>
                                <option value="Events" >Events</option>
                                <option value="Tests" >Tests</option>
                                <option value="Tasks" >Tasks</option>
                                
                              
                            </select>
                        </div>
                                 

                        <div className="form-group btn-mid">
                           
                            <button type="submit" name="resource title">Submit</button>
                        </div>


                    </form>

                </div>

            </div>



            </div>
        )
    }
}


export default TaskCreatorContainer;