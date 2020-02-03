import React from 'react';

const ModalComponent = (props) => {

    const { show, closeModal } = props;

    return (

        <div className={show ? "overlay" : "hide"}>
            <div className={show ? "modal" : "hide"}>
                <button onClick={closeModal}>X</button>
                <div className="modal-container "> 
                    <div className="modal-item">Upload your Assignment in any one format: .pdf, .doc, .zip etc</div>
                    <div className="modal-item"></div>
                    <div className="modal-item"></div>


                </div>
            </div>
        </div>
    )
}


export default ModalComponent;


// "modal-container "