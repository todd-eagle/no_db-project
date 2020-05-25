import React from 'react'
import Form from './Form'

export default function ViewUserList(props){

    const {id, image, location, country, description} = props.data
    const {removeFn, showFormfn, readShowStateFn} = props
    return (
        <>
        <div className="card">
            <div class="black-box">
             <button onClick={(e) =>showFormfn()} >+</button>
             <button onClick={ ()=> removeFn(id)}>-</button>
             </div>
            <img className="card-image"  src={image} />
            <p className="card-location">{location}, {country}</p>
            <p className="card-description">{description}</p>            
        </div>  
        {/* {!readShowStateFn() ? (
		<div>
            <Form {...props} />
        </div>	
		) : null} */}
        </>
    )

}