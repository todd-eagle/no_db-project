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


    render(){
        
        // this.state.init ? console.log(this.state.globalList) : console.log("still loading")

        if (this.state.init){

            const privObjects = this.state.privList.map(element =>{
                return <ViewUserList data={element} />
            })

            const pubObjects =  this.state.globalList.map(element =>{
                return element
            })
    
            const rand = Math.ceil((Math.random() * (this.state.globalList.length) -1) )
           

            const singleElement = pubObjects[rand]

            const pubObject =  <ViewDestCard pub_data={singleElement} />
          

            return (
                <> 
                {pubObject}
                {privObjects}
                </>
                )
    
        } else {
            return (
                <> 
              
                </>
                )
        }



       

    }
}