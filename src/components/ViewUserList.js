import React from 'react'
import Form from './Form'

function ViewUserList(props){

    const {id, image, location, country} = props.data
    const {removeFn} = props
    return (
        <>
        <div>
            <img src={image} />
            <p>Location: {location}</p>
            <p>country: {country}</p>
        </div>
        <button onClick={ ()=> removeFn(id)}>Remove</button>
        
       <Form {...props}/>
           
        </>
    )

}

export default ViewUserList