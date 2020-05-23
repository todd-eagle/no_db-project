import React, {Component} from 'react'

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            location: this.props.data.location,
            country: this.props.data.country,
            image: this.props.data.image,
            pros: [],
            cons: [],
            verdict:'',
            addedToList: true
        }
    }

    handleAdd(e) {
        e.preventDefault()
        const {location, country, image} = this.state
        this.props.updateFn(this.props.data.id)
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }

    render(){

        return (
            <form onSubmit={(e) => this.handleAdd(e)} >
                <input 
                    onChange={(e) => this.handleChange(e)}
                    name="image"
                    value={this.state.image}
                />
                <input 
                    onChange={(e) => this.handleChange(e)}
                    name="location"
                    value={this.state.location}
                />
                <input 
                    onChange={(e) => this.handleChange(e)}
                    name="country"
                    value={this.state.country}
                />
                <button type='submit'>update</button>
            </form>
        )
    }
}