import React, { useState } from 'react';
import ModalComponent from '../modal/modal.component';


const TaskComponent = ({title}) => {


    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

  

    
    return (
        <div className="task-container">
            <div className="task-item title">
                {title}
            </div>

            

            {
                !show &&
                <button className="task-item submit" onClick={openModal}>Submit</button>}
                <ModalComponent closeModal={closeModal} show={show} />
        </div>
    );
}

export default TaskComponent;