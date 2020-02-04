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
                        Time table : 8Th Grade 
                   </div>
                    <div>
                    
                        <p>
                            Boston Public School 
                   </p>
                    </div>
                </div>
                <div className="time-table">





                    <div>

                        <table class="myTimetable">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>P1</td>
                                    <td>
                                        <div class="subject">Maths</div>
                                        <div class="room">A120</div>
                                    </td>
                                    <td>
                                        <div class="subject">Art</div>
                                        <div class="room">C1</div>
                                    </td>
                                    <td>
                                        <div class="subject">English</div>
                                        <div class="room">B21</div>
                                    </td>
                                    <td>
                                        <div class="subject">Maths</div>
                                        <div class="room">A120</div>
                                    </td>
                                    <td>
                                        <div class="subject">Geography</div>
                                        <div class="room">B101</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>P2</td>
                                    <td>
                                        <div class="subject">Science</div>
                                        <div class="room">Lab1</div>
                                    </td>
                                    <td>
                                        <div class="subject">History</div>
                                        <div class="room">B104</div>
                                    </td>
                                    <td>
                                        <div class="subject">Spanish</div>
                                        <div class="room">C17</div>
                                    </td>
                                    <td>
                                        <div class="subject">P.E.</div>
                                        <div class="room">A Gym</div>
                                    </td>
                                    <td>
                                        <div class="subject">Maths</div>
                                        <div class="room">A120</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="6" class="break">Break</td>
                                </tr>
                                <tr>
                                    <td>P3</td>
                                    <td>
                                        <div class="subject">I.T.</div>
                                        <div class="room">ICT 1</div>
                                    </td>
                                    <td>
                                        <div class="subject">English</div>
                                        <div class="room">B21</div>
                                    </td>
                                    <td>
                                        <div class="subject">Music</div>
                                        <div class="room">C5</div>
                                    </td>
                                    <td>
                                        <div class="subject">English</div>
                                        <div class="room">B21</div>
                                    </td>
                                    <td>
                                        <div class="subject">PSHE</div>
                                        <div class="room">A24</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="6" class="lunch">Lunch</td>
                                </tr>
                                <tr>
                                    <td>P4</td>
                                    <td>
                                        <div class="subject">History</div>
                                        <div class="room">B104</div>
                                    </td>
                                    <td>
                                        <div class="subject">Drama</div>
                                        <div class="room">C17</div>
                                    </td>
                                    <td>
                                        <div class="subject">Maths</div>
                                        <div class="room">A120</div>
                                    </td>
                                    <td>
                                        <div class="subject">Geography</div>
                                        <div class="room">B101</div>
                                    </td>
                                    <td>
                                        <div class="subject">P.E.</div>
                                        <div class="room">A Gym</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>P5</td>
                                    <td>
                                        <div class="subject">Spanish</div>
                                        <div class="room">C17</div>
                                    </td>
                                    <td>
                                        <div class="subject">Science</div>
                                        <div class="room">Lab1</div>
                                    </td>
                                    <td>
                                        <div class="subject">English</div>
                                        <div class="room">B21</div>
                                    </td>
                                    <td>
                                        <div class="subject">Science</div>
                                        <div class="room">Lab1</div>
                                    </td>
                                    <td>
                                        <div class="subject">R.E.</div>
                                        <div class="room">B18</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>


            </div>
        )
    }
}


export default TimetableContainer;