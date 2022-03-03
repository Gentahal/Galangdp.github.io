const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const url = req.url

    const renderHTML = (path, res) => {
        fs.readFile(path, (err, datanya) => {
            if(err){
                res.writeHead(404)
                res.write('Error, Page Not Found')
            }else{
                res.write(datanya)
            }
            res.end()
        })
    } 
    
    switch (url.toLowerCase()) {
        case '/index' :
            renderHTML('./index.html', res)
            break;
        case '/about' :
            renderHTML('./about.html', res)
            break;
        case '/contact' :
            renderHTML('./form.html', res)
            break;
        case '/experience' :
            renderHTML('./service.html', res)
            break;
        default:
            renderHTML('./contact.html', res)
    }

    function panggilCSS(req, res){
        if(req.url == '/style.css'){
            res.writeHead(200, {
                'Content-Type': 'text/css'
            });
            const fileContents = fs.readFileSync('./style.css', {encoding:'utf8'});
            res.write(fileContents);
            res.end();
        }
    }
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    panggilCSS(req,res);

}).listen(3000, () => {
    console.log('Server Listen = 3000')
});
