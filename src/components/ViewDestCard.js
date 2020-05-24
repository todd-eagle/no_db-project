import React from 'react'

export default function ViewDestCard(props) {
    const {image, location, country, description} = props.pub_data
   
    return(
        <section className="main-display">
            <h1 className="dest-heading">Most Popular Destinations</h1>
          
            <div className="main-view">
                <img className="main-img" src={image} />
                <div className="side-panel">
                    <p className="location">{location}, {country}</p>
                    <p className="description">{description}</p>
                    <div className="main-add-button">
                        <button className="btn-style abolition"><span class="plus"></span>Add Destination</button>
                    </div> 
                </div>
            </div>
        </section>
    )
}