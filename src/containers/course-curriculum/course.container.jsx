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
                                <td className="credit">6</td>
                            </tr>
                            <tr className="first-row">
                                <td>Humanities, Arts, and Social Sciences (HASS) Requirement [one subject can be satisfied by 6.805[J] in the Departmental Program]; at least two of these subjects must be designated as communication-intensive (CI-H) to fulfill the Communication Requirement.</td>
                                <td className="credit">8</td>
                            </tr>

                            <tr className="first-row">
                                <td>Restricted Electives in Science and Technology (REST) Requirement [can be satisfied by 6.004 and 6.042[J] (if taken under joint number 18.062[J]) in the Department Program]</td>
                                <td className="credit">2</td>
                            </tr>

                            <tr className="first-row">
                                <td>Laboratory Requirement (12 units) [satisfied by 6.01, 6.02, 6.03 or 6.08 in the Departmental Program]</td>
                                <td className="credit">1</td>
                            </tr>

                            <tr className="first-row">
                                <td>Total GIR Subjects Required for SB Degree	</td>
                                <td className="credit">17</td>
                            </tr>
                        </tbody>

                  
                    </table>
                </div>


                <div className="curriculum">
                    <div className="curr-heading">
                        <b>Departmental Program</b>
                        <p>
                        Choose at least two subjects in the major that are designated as communication-intensive (CI-M) to fulfill the Communication Requirement.
                        </p>
                    </div>

                    <table>
                        <thead>
                               <tr>
                                   <th className="thead-left">Departmental Requirements </th>
                                   <th className="thead-right">Units</th>
                               </tr>
                        </thead>

                        <tbody>
                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.0001</div>
                                    <div className="unit-name">	Introduction to Computer Science Programming in Python</div>
                                </td>
                                <td className="credit">6</td>
                            </tr>
                           
                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.042[J]</div>
                                    <div className="unit-name">Mathematics for Computer Science</div>
                                </td>
                                <td className="credit">12</td>
                            </tr>


                            <tr className="first-row">
                                
                                <td >Select one of the following</td>
                                <td className="credit">9-12</td>
                            </tr>

                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.UAT</div>
                                    <div className="unit-name">	Oral Communication (CI-M)</div>
                                </td>
                                
                            </tr>

                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.UAR</div>
                                    <div className="unit-name">	Seminar in Undergraduate Advanced Research (12 units, CI-M)</div>
                                </td>
                                
                            </tr>

                            <tr className="first-row">
                                
                                <td >Select one of the following</td>
                                <td className="credit">12</td>
                            </tr>

                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.01</div>
                                    <div className="unit-name">Introduction to EECS via Robotics</div>
                                </td>
                                
                            </tr>

                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.02</div>
                                    <div className="unit-name">Introduction to EECS via Communication Networks</div>
                                </td>
                                
                            </tr>

                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.03</div>
                                    <div className="unit-name">	Introduction to EECS via Medical Technology</div>
                                </td>
                                
                            </tr>
                           
                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.04</div>
                                    <div className="unit-name">Introduction to EECS via Interconnected Embedded Systems</div>
                                </td>
                                
                            </tr>
                            
                            <tr className="first-row">
                                
                                <td > <b>Computer Science Requirements</b> </td>
                                
                            </tr>
                           
                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.004</div>
                                    <div className="unit-name">	Computation Structures</div>
                                </td>
                                <td className="credit">12</td>
                            </tr>
                           
                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.006</div>
                                    <div className="unit-name">Introduction to Algorithms</div>
                                </td>
                                <td className="credit">12</td>
                            </tr>
                           
                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.009</div>
                                    <div className="unit-name">	Fundamentals of Programming</div>
                                </td>
                                <td className="credit">12</td>
                            </tr>
                           
                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.031</div>
                                    <div className="unit-name">Elements of Software Construction</div>
                                </td>
                                <td className="credit">15</td>
                            </tr>

                            <tr className="first-row">
                                <td className="dpt">
                                    <div className="unit-id">6.033</div>
                                    <div className="unit-name">	Computer Systems Engineering (CI-M)</div>
                                </td>
                                <td className="credit">12</td>
                            </tr>
                           
                           
                        </tbody>

                        
                    </table>
                </div>


            </div>
        )
    }
}


export default CourseContainer;