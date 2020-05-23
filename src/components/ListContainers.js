import React, {Component} from 'react'
import ViewUserList from './ViewUserList'
import ViewDestCard from './ViewDestCard'
import Axios from 'axios'

export default class ListContainers extends Component {
    constructor(){
        super()
        this.state = {
            globalList: [],
            filteredGlobal:[],
            privList:[]
        }
        this.removeDest = this.removeDest.bind(this)
        this.updateDest = this.updateDest.bind(this)
    }

   async componentDidMount(){
        Axios.get('/api/destination').then(res => {
            this.setState ({
                globalList: res.data, init:1 
            })
             const filteredPrivate = this.state.globalList.filter(element => {
                return element.addedToList === true
            })
            this.setState ({
                privList: filteredPrivate
            })
        })
    }

    removeDest(id){
        /* 
        I would just delete off privList, but as set up, 
        I can only delete of global list to show CRUD  
        */
        Axios.delete(`/api/destination/${id}`).then (res => {
            this.setState({globalList: res.data})
            const filteredPrivate = this.state.globalList.filter(element => {
                return element.addedToList === true
            })
            this.setState ({
                privList: filteredPrivate
            })
        })
    }

    updateDest(id) {
        Axios.put(`/api/destination/${id}`).then(res =>{
            this.setState({globalList: res.data})
            const filteredPrivate = this.state.globalList.filter(element => {
                return element.addedToList === true
            })
            this.setState ({
                privList: filteredPrivate
            })
        })
    }

    randomNum(rand) {
        return Math.ceil((Math.random() * (rand.length) -1) )
    }
    
    renderPubList(list) {

        const pubObjects =  list.map(element =>{
            return element 
        })[this.randomNum(list)] 

        return pubObjects

    }

    renderPrivList(list) {
        return list.map(element =>{
            return <ViewUserList 
                key={`${element.location}-${element.id}`} 
                data={element} removeFn={this.removeDest} 
                updateFn={this.updateDest}
                />
            })
    }

    render(){

        if (this.state.init){

            const {globalList, privList} = this.state

            const pubObject =  <ViewDestCard pub_data={this.renderPubList(globalList)} />
            const privObjects = this.renderPrivList(privList)

            return (
                <> 
                {pubObject}
                {privObjects}
                </>
                )
    
        }
        return <></>
    }
}