import React from 'react';
import Testreport from '../../test-report/test-report';
import ActivityGraph from '../../activity-graph/activity-graph';

import TaskViewContainer from '../../../containers/task-view/task-view.container';
import LearningFrameworkViewContainer from '../../../containers/learning-framework-view/learning-framework-view.container';

const SectionComponent = () => (
    <div className="section-container">
       

        <div className="section-item activity-graph ">Activity Graph

        <div className="activity-item">
        <Testreport/>
        <ActivityGraph/>
        </div>
        
        </div>
        <div className="section-item task ">Tasks / Assignments
           <TaskViewContainer/>
        </div>
        <div className="section-item collection ">Collection

            <LearningFrameworkViewContainer/>
            
            
        
        </div>

        
    </div>
)

export default SectionComponent;