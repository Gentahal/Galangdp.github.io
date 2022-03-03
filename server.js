const http = require("http")

const server = http.createServer((req, res) =>{

    let data ; 

    console.log(req);

    data = {
        url : req.url,
        method : req.method,
        header : req.headers
    }

    res.setHeader("Content-Type", "application/json")

    res.end(JSON.stringify(data))
});

server.listen(3000)
