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
        const  {show, closeFormFn} = this.props
            if(!show){
                return null
            }
                return (
                    <div className="modal">
                        <div className="create-form">
                            
                            <button onClick={()=> closeFormFn()} class="x">x</button>

                            <p className="form-text">Create Destination</p>

                            <form  className="update" onSubmit={(e) => {this.handleAdd(e); closeFormFn() }}  >
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
                                <textarea 
                                    onChange={(e) => this.handleChange(e)}
                                    name="description"
                                    placeholder="description"
                                >
                                </textarea>

                                <button  className="subm-btn abolition" type='submit'>save</button>
                            </form>
                        </div>  
                    </div>
                )
        }
}