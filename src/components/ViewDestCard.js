import React from 'react'

export default function ViewDestCard(props) {
    const {location, description} = props.pub_data
   
    return(
        <div>
            <p>Location: {location}</p>
            <p>Description: {description}</p>
        </div>
    )
}