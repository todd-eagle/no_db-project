import React from 'react'

function ViewUserList(props){

    const {image, location, country} = props.data
    return (
        <>
        <div>
            <img src={image} />
            <p>Location: {location}</p>
            <p>country: {country}</p>
        </div>
        </>
    
        )

}

export default ViewUserList