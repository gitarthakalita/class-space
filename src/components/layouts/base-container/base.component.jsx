import React from 'react';
import SidebarComponent from '../sidebar-container/sidebar.component';
import SectionComponent from '../section-container/section.component';

import { Switch, Route, Link } from 'react-router-dom';
import CourseContainer from '../../../containers/course-curriculum/course.container';
import TimetableContainer from '../../../containers/time-table/time-table.container';
import SignInComponent from '../../../containers/sign-in/sign-in.container';
import SignUpComponent from '../../../containers/sign-up/sign-up.container';
import ResourceHubContainer from '../../../containers/resource-hub/resource-hub.container';
import ResourceCreatorContainer from '../../../containers/resource-creator/resource-creator.container';
import TaskCreatorContainer from '../../../containers/task-creator/task-creator.container';
import TaskEventsContainer from '../../../containers/tasks-events/task-events.container';
import ProfileMenu from '../profile-menu/profile-menu.component';

class BaseContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu)
        });
    };


    closeMenu(event) {


        if(!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }

      
    };



    render() {
        return (

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



                        <div className="profile" onClick={this.showMenu} ></div>
                        {
                            this.state.showMenu
                                ? (
                                    <div className="menu"
                                        ref={(element) => {
                                            this.dropdownMenu = element;
                                        }}
                                    >
                                        <ProfileMenu />

                                    </div>


                                )
                                : (
                                    null
                                )
                        }






                    </div>

                    

                    <Switch>
                        
                        <Route exact path='/' component={SectionComponent} />
                        <Route path='/course-curriculum' component={CourseContainer} />
                        <Route path='/time-table' component={TimetableContainer} />
                        <Route path='/sign-in' component={SignInComponent} />
                        <Route path='/sign-up' component={SignUpComponent} />

                        <Route path='/resource-hub' component={ResourceHubContainer} />
                        <Route path='/resource-creator' component={ResourceCreatorContainer} />

                        <Route path='/task-creator' component={TaskCreatorContainer} />
                        <Route path='/tasks-and-events' component={TaskEventsContainer} />
                    </Switch>

                </div>
            </div>
        )
    }
}

export default BaseContainer;