import React from 'react'

function ViewUserList(props){

    const {image, location, country} = props.data

    //console.log(props)
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