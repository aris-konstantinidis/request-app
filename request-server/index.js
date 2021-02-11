const express = require('express')
const cors = require('cors')
const bp = require('body-parser')

const app = express()
app.use(cors())
app.use(bp.json())


const requests = [
	{name: 'aris', title: 'new grill', description: 'a new grill in front of our house would be awesome'},
	{name: 'eleni', title: 'wash on freidays', description: 'washing on freidays would make life easier'}
]


// api
app.get('/requests', (req, res) => {
	setTimeout(() => {
		res.json(requests)
	}, 500)
})



app.listen(9000)
