import React from 'react';
import SidebarComponent from '../sidebar-container/sidebar.component';
import SectionComponent from '../section-container/section.component';

import { Switch, Route, Link } from 'react-router-dom';
import CourseContainer from '../../../containers/course-curriculum/course.container';
import TimetableContainer from '../../../containers/time-table/time-table.container';
import SignInComponent from '../../../containers/sign-in/sign-in.container';
import SignUpComponent from '../../../containers/sign-up/sign-up.container';

const BaseContainer = () => (



    <div className="base-container">

       
        
        <div className="base-item sidebar ">
            <SidebarComponent />
        </div>




        <div className="base-item section ">
            <div className="navbar">

                <Link to='/sign-in'>
                <button>Sign In</button>
                </Link>
                
                <Link to='sign-up'>
                <button>Sign Up</button>
                </Link>


                <Link>
                    <div className="profile"></div>
                </Link>

                

            </div>

            <Switch>
                <Route exact path='/' component={SectionComponent} />
                <Route path='/course-curriculum' component={CourseContainer}/>
                <Route path='/time-table' component={TimetableContainer} />
                <Route path='/sign-in' component={SignInComponent} />
                <Route path='/sign-up' component={SignUpComponent} />
            </Switch>
            
        </div>
    </div>
)

export default BaseContainer;