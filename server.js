const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    const url = req.url

    const input = (skipp, res) => {
        fs.readFile(skipp, (err, datanya) => {
            err? res.write('Error : File Not Found') : res.write(datanya);
            res.end()
        })
    } 

    switch (url.toLowerCase()) {
        case '/index' :
            input('./index.html', res)
            break;
        case '/about' :
            input('./about.html', res)
            break;
        case '/contact' :
            input('./contact.html', res)
            break;
        case '/experience' :
            input('./experience.html', res)
            break;
        default:
            input('./portfoliokitaberdua.html', res)
    }

    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

}).listen(3000, () => {
    console.log('Server Listen = 3000')
});
