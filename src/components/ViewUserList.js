import React from 'react'
import Form from './Form'

export default function ViewUserList(props){

    const {id, image, location, country} = props.data
    const {removeFn} = props
    return (
        <>
        <div>
            <img src={image} />
            <p>Location: {location}</p>
            <p>country: {country}</p>
            <button onClick={ ()=> removeFn(id)}>Remove</button>
            
            <Form {...props} /> 
        </div>
              
        </>
    )

}