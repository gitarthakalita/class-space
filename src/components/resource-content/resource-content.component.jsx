import React from 'react';


const ResourceContentComponent = ({title, image}) => (

    <div className="resource-list-item">
        <div className="rsc-item header-img" 
            style={
                {backgroundImage: `url(${image})`}
            }
        ></div>
        <div className="rsc-item title">{title}</div>
        <button className="rsc-item rsc-btn">
            Details
        </button>
    </div>

);

export default ResourceContentComponent;