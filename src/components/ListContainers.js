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

   async componentDidMount(){
        Axios.get('/api/destination').then(res => {
            this.setState ({
                globalList: res.data, init:1 
            })
             const filteredGlobal = this.state.globalList.filter(element => {
                return element.addedToList === true
            })
            this.setState ({
                privList: filteredGlobal
            })
        })
    }

    randomNum(list) {
        return Math.ceil((Math.random() * (list.length) -1) )
    }
    
    renderPubList(list) {

        const pubObjects =  list.map(element =>{
            return element
        })[this.randomNum(list)] 

        return pubObjects

    }

    renderPrivList(list) {
        return list.map(element =><ViewUserList data={element} />)
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