import React from 'react';

class CourseContainer extends React.Component {

    constructor() {
        super();

        this.state = {

        }
    };

    render() {
        return (
            <div className="course-container">
                <div className="header course-header">
                    <div className="heading">
                        Course curriculum : Computer Science and Engineering (course 6-3)
                   </div>
                    <div>
                        <p>
                            Department of Electrical Engineering and Computer Science, MIT
                   </p>
                        <p>
                            Batchelor of Science in Computer Science and Engineering
                   </p>
                    </div>
                </div>

                <div className="curriculum">
                    <div className="curr-heading">
                        <b>General Institute Requirements (GIRs)</b>
                        <p>
                            the General Institute Requirements include a Communication Requirement that is integrated into both the HASS Requirements and the requirements of each major; See details below.
                        </p>
                    </div>

                    <table>
                        <thead>
                               <tr>
                                   <th className="thead-left">Summary of Subject Requirements </th>
                                   <th className="thead-right">Subjects</th>
                               </tr>
                        </thead>

                        <tbody>
                            <tr className="first-row">
                                <td>Science Requirement</td>
                                <td>6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        )
    }
}


export default CourseContainer;