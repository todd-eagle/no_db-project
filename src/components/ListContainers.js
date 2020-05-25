import React, {Component} from 'react'
import ViewUserList from './ViewUserList'
import ViewDestCard from './ViewDestCard'
import FormCreate from './FormCreate'
import Axios from 'axios'


export default class ListContainers extends Component {
    constructor(){
        super()
        this.state = {
            globalList: [],
            filteredGlobal:[],
            privList:[],
            show: false,
            addedToList: true
        }
        this.removeDest = this.removeDest.bind(this)
        this.updateDest = this.updateDest.bind(this)
        this.createDest = this.createDest.bind(this)
        this.showForm = this.showForm.bind(this)
        this.closeForm = this.closeForm.bind(this)
        this.changeAddtoList = this.changeAddtoList.bind(this)
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

    createDest(data){
        const body = {data}
        Axios.post('./api/destination', body).then(res => {
            this.setState({globalList: res.data})
            const filteredPrivate = this.state.globalList.filter(element => {
                return element.addedToList === true
            })
            this.setState ({
                privList: filteredPrivate
            })
        })
    }

    removeDest(id){
        Axios.delete(`/api/destination/${id}`).then(res => {
            this.setState({globalList: res.data})
            const filteredPrivate = this.state.globalList.filter(element => {
                return element.addedToList === true
            })
            this.setState ({
                privList: filteredPrivate
            })
        })
    }

    updateDest(id, data) {
        const body = {data}
        console.log(body)
       
        Axios.put(`/api/destination/${id}`, body).then(res =>{
            this.setState({globalList: res.data})
            console.log(res.data)
            const filteredPrivate = this.state.globalList.filter(element => {
                return element.addedToList === true
            })
            this.setState ({
                privList: filteredPrivate
            })
        })
    }

    showForm(){
        this.setState({
            show: true
        })
    }

    closeForm(){
        this.setState({
            show: false
        })
    }

    changeAddtoList(id){
        const data = {
            addedToList: true
        }
       this.updateDest(id, data)
       console.log("the data here is " +id)
    }

    readShowState(){
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
                createFn={this.createDest}
                showFormfn={this.showForm}
                />
        })
    }

    renderCreateForm(){
        return <FormCreate createFn={this.createDest}  
                show={this.state.show}
                closeFormFn={this.closeForm}/>
    }

    render(){

        if (this.state.init){

            const {globalList, privList} = this.state
            const formObject = this.renderCreateForm()
            const pubObject =  <ViewDestCard addtoListFn={this.changeAddtoList} pub_data={this.renderPubList(globalList)} />
            const privObjects = this.renderPrivList(privList)

            return (
                <>
                    {pubObject}
                    <section>
                    <div class="my-list-header">
                        <div class="h2-container">
                            <h2 class="heading-2">MY TOP PLACES TO VISIT BEFORE I DIE</h2>
                        </div>
                        <div class="new-btn-container">  
                            <button onClick={()=>this.showForm()} class="btn-style abolition">New Destination</button>
                        </div>
                    </div>
                        <div className="my-list">
                            {formObject}
                            {privObjects}
                        </div>    
                    </section>
                </>    
                )
    
        }
        return <></>
    }
}