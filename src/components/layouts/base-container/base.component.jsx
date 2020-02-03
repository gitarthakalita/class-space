import React from 'react';
import SidebarComponent from '../sidebar-container/sidebar.component';
import SectionComponent from '../section-container/section.component';

import { Switch, Route } from 'react-router-dom';
import CourseContainer from '../../../containers/course-curriculum/course.container';
import TimeTableContainer from '../../../containers/time-table/time-table.container';

const BaseContainer = () => (
    <div className="base-container">
        <div className="base-item sidebar ">
            <SidebarComponent />
        </div>




        <div className="base-item section ">
            <div className="navbar">
                <button>Sign In</button>
                <button>Sign Up</button>

            </div>

            <Switch>
                <Route exact path='/' component={SectionComponent} />
                <Route path='/course-curriculum' component={CourseContainer}/>
                <Route path='/time-table' component={TimeTableContainer} />

            </Switch>
            {/* <SectionComponent /> */}
        </div>
    </div>
)

export default BaseContainer;