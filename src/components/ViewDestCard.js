import React from 'react'

export default function ViewDestCard(props) {
    const {location, description} = props.pub_data
    
    console.log(props)
   
    return(
        <div>
            <p >Location: {location}</p>
            <p>Description: {description}</p>
        </div>
    )
}