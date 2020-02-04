import React from 'react';

class TimetableContainer extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    };

    render() {
        return (
            <div className="time-table-container">
                <div className="header time-header">
                    <div className="heading">
                        Time table : Computer Science and Engineering (course 6-3)
                   </div>
                    <div>
                        <p>
                            Department of Electrical Engineering and Computer Science
                   </p>
                        <p>
                            Batchelor of Science in Computer Science and Engineering
                   </p>
                    </div>
                </div>
                <div className="time-table">


                </div>


            </div>
        )
    }
}


export default TimetableContainer;