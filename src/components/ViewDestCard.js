import React from 'react'

export default function ViewDestCard(props) {
    const {image, location, description} = props.pub_data
   
    return(
        <section>
            <div>
                <img src={image} />
                <p >Location: {location}</p>
                <p>Description: {description}</p>
            </div>
        </section>
    )
}