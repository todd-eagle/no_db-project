import React from 'react'
import Form from './Form'

export default function ViewUserList(props){

    const {id, image, location, country, description} = props.data
    const {removeFn, showFormfn, readShowStateFn} = props
    return (
        <>
        <div className="card">
            <div class="black-box">
                <span className="updade">< button onClick={(e) =>showFormfn()} >+</button></span>
                <span className="delete"><button onClick={ ()=> removeFn(id)}>-</button></span>
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