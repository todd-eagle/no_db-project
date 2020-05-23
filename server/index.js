const express = require('express')
const app = express()
const Ctrl = require('./controllers/controller.js')
const SERVER_PORT = 4040

app.use(express.json())

app.get('/api/destination', Ctrl.getAllDest)
app.post('/api/destination', Ctrl.postDest)
app.put('/api/destination/:dest_id', Ctrl.editDest)
app.delete('/api/destination/:dest_id', Ctrl.deleteDest)

app.post('api/destination', Ctrl.postDest)


app.listen(SERVER_PORT, () => console.log(`Server started and listening on port ${SERVER_PORT}`) )