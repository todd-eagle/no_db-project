import React, {Component} from 'react'
import ViewUserList from './ViewUserList'
import ViewDestCard from './ViewDestCard'
import Axios from 'axios'

export default class ListContainers extends Component {
    constructor(){
        super()
        this.state = {
            globalList: [],
            privList:[]
        }
    }

    componentDidMount(){
        Axios.get('/api/destination').then(res => {
            this.setState ({
                globalList: res.data
            })
            const filteredGlobal = this.state.globalList.filter(element => {
                return element.addedToList === true
            })
            this.setState ({
                privList: filteredGlobal
            })
        })
       
    }

    render(){
        
        const privObjects = this.state.privList.map(element =>{
            return <ViewUserList data={element} />
        })
        
        return (<> 
            {privObjects}       
        </>)

    }
}