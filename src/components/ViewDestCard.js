import React from 'react'

function ViewDestCard(props){

    const {location, country, image, description} = props.data
    return (
        <>
         <div>
            <img src={image} />
            <p>Location: {location}</p>
            <p>country: {country}</p>
            <p>description: {description}</p>
        </div>
        </>
    
        )

}

export default ViewDestCard