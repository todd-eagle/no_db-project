import React, {Component} from 'react'

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            location: this.props.data.location,
            country: this.props.data.country,
            image: this.props.data.image,
            blurb: this.props.data.blurb,
            description: this.props.data.description,
            pros: [],
            cons: [],
            verdict:'',
            addedToList: true
        }
    }

    handleAdd(e) {
        e.preventDefault()
        const {id} = this.props.data
        console.log(id)
        const {updateFn} = this.props
        updateFn(id, this.state)
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
                 <input 
                    onChange={(e) => this.handleChange(e)}
                    name="description"
                    value={this.state.description}
                />
                <button type='submit'>update</button>
            </form>
        )
    }
}