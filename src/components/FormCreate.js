import React, {Component} from 'react'

export default class FormCreate extends Component{
    constructor(props){
        super(props)
        this.state = this.initialState;
    }

    get initialState() {
        return { 
            location: '',
            country: '',
            image: '',
            blurb: '',
            description: '',
            pros: [],
            cons: [],
            verdict: '',
            addedToList: true      
        };
      }

    reset() {
        this.setState(this.initialState);
    }

    handleAdd(e) {
        e.preventDefault()
        const {createFn} = this.props
        createFn(this.state)
        this.reset()
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
                    placeholder="image"
                />
                <input 
                    onChange={(e) => this.handleChange(e)}
                    name="location"
                    placeholder="location"
                />
                <input 
                    onChange={(e) => this.handleChange(e)}
                    name="country"
                    placeholder="country"
                />
                 <input 
                    onChange={(e) => this.handleChange(e)}
                    name="description"
                    placeholder="description"
                />

                <button type='submit'>save</button>
            </form>
        )
    }
}