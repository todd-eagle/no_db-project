const destinations = require('../data.json')
let id = destinations[destinations.length - 1].id + 1

module.exports = {
    getAllDest: (req, res) => {
        res.status(200).send(destinations)
    },
    postDest: (req, res) => {

        const {location, country, image, blurb, 
            description, pros, cons, verdict, addedToList} = req.body.data
        
        const newDest = {id, location, country, image, blurb, 
            description, pros, cons, verdict, addedToList} 
         
        destinations.push(newDest) 
        
        id++

        res.status(200).send(destinations)        
    },
    editDest: (req, res) => {
        const {dest_id} = req.params
        const {location, country, image, blurb, 
            description, pros, cons, verdict, addedToList} = req.body.data
        

        const index = destinations.findIndex((element) => element.id === +dest_id)

        if (index === -1){
            return res.status(404).send("Destination not found.")
        }

        const updateDest = {id: +dest_id, location, country, image, blurb, description, pros, cons, verdict, addedToList} 
        
         
        destinations[index] = updateDest    

        res.status(200).send(destinations)
    },
    deleteDest: (req, res) => {
        const {dest_id} = req.params

        const index = destinations.findIndex((element) => element.id === +dest_id)

        if (index === -1){
            return res.status(404).send("Destination not found.")
        }

        destinations.splice(index, 1)

        res.status(200).send(destinations)
    }
}