import React from 'react';

import LEARNING_FRAMEWORK_DATA from '../../data/learning-framework.data';

import LearningFrameworkComponent from '../../components/learning-framework/learning-framework.component';

class LearningFrameworkViewContainer extends React.Component {
    constructor(){
        super();

        this.state={
            learning_framework_data: LEARNING_FRAMEWORK_DATA
        }
    }

    render() {
        return(
            <div className="framework-view-container">
                {this.state.learning_framework_data.map(({framework_title, framework_id, framework_image_url}) => (
                    <LearningFrameworkComponent
                        key={framework_id}
                        title={framework_title}
                        image={framework_image_url}
                    />
                ))}
            </div>
        )
    }
}

export default LearningFrameworkViewContainer;