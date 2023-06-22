const http = require("http")

const server = http.createServer((req, res) => {
    res.end("Hello\n");

})

server.listen(4000, () => {
    console.log("Server connected")
})