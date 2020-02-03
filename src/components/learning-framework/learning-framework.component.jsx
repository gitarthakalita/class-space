import React from 'react';

const LearningFrameworkComponent = ({ title, image }) => (
    <div className="learning-framework-container">

        <div className="learning-framework-item header-img" 
             style={
                 {backgroundImage: `url(${image})`}
             }
        >  
        </div>

        <div className="learning-framework-item title">
            {title}
        </div>

        <button className="learning-framework-item details">Details</button>
    </div>
);

export default LearningFrameworkComponent;