const express = require('express')
const cors = require('cors')
const bp = require('body-parser')
const mongoose = require('mongoose')
const Request = require("./models/Request")

mongoose.connect('mongodb://localhost:27017/request', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false)


const app = express()
app.use(cors())
app.use(bp.json())


// api
app.get('/requests', async (req, res) => {
		res.json(await Request.find().sort({_id: -1}))
})

app.post('/request', async (req, res) => {
	const newRequest = new Request({
		name: req.body.name,
		title: req.body.title,
		description: req.body.description
	})
	res.json(await newRequest.save())
})




app.listen(9000)
