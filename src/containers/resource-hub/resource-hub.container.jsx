import React from "react";
import ResourceContentComponent from "../../components/resource-content/resource-content.component";


import LEARNING_FRAMEWORK_DATA from '../../data/learning-framework.data';



class ResourceHubContainer extends React.Component { 
    
    constructor(){
        super();

        this.state={
            learning_framework_data: LEARNING_FRAMEWORK_DATA
        }
    };
    
    

    render() {
        return (
        <div className="resource-hub-container">

            <div className="header resource-hub-header">

                <div className="heading">
                    Resource Hub
                   </div>
                <div>
                    <p>
                        Get access to all the downloadable resources in the ClassSpace Ecosystem : Teacher created resources, Student Contributed Resources and Guided Learning Frameworks.
                   </p>

                </div>
            </div>

            <div className="resources-list-container">


            {this.state.learning_framework_data.map(({framework_title, framework_id, framework_image_url}) => (
                    <ResourceContentComponent
                        key={framework_id}
                        title={framework_title}
                        image={framework_image_url}
                    />
                ))}


            </div>

        </div>
    )
 }
}

export default ResourceHubContainer;