const path = require("path")
const express = require("express")
const app = express()
const port = 3000

app.use(express.static(__dirname))

app.set("views", "./views")

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get("/drippyDrop", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/drippyDrop.html"))
})

app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
