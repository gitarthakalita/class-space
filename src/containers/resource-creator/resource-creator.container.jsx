import React from "react";


const ResourceCreatorContainer = () => {


    return (
        <div className="resource-creator-container">


            <div className="header resource-creator-header">

                <div className="heading">
                    Resource Creator
                   </div>
                <div>
                    <p>
                        Create resources in the ClassSpace Ecosystem in these content types : Video Contents, Inforgaphics, Ebooks, Notes, Slides.
                   </p>

                </div>
            </div>

            <div className='rsc-creator'>
                <div className="rsc-creator-item">
                    <form className="form-control">
                        <div className="form-group">
                            <label >Resource Title :  </label>
                            <input type="text" name="resource title"></input>
                        </div>
                        <div className="form-group">
                            <label >Resource Description :  </label>
                            <textarea type="text" name="resource title"></textarea>
                        </div>
                        <div className="form-group">
                            <label >Resource Content Category :  </label>
                            <select type="dropdown" name="resource content category ">
                                <option value="Ebooks" >Ebooks</option>
                                <option value="Infographics" >Infographics</option>
                                <option value="Notes" >Notes</option>
                                <option value="Slides" >Slides</option>
                                <option value="Videos" >Videos</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label > Upload Content :  </label>
                            <input type="file" name="file-upload"></input>
                        </div>

                        <div className="form-group btn-mid">
                           
                            <button type="submit" name="resource title">Submit</button>
                        </div>


                    </form>

                </div>

            </div>

        </div>
    )
}

export default ResourceCreatorContainer;