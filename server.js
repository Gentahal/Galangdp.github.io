const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const url = req.url

    const renderHTML = (path, res) => {
        console.log(path)
        res.setHeader('Content-Type', 'text/html')
        fs.readFile(path, (err, datanya) => {
            
            if(err){
                res.writeHead(404)
                res.write('Error, Page Not Found')
            }else{
                console.log(datanya)
                res.write(datanya.toString())
            }
            res.end()
        })
    } 
    console.log(url.toLowerCase())
    switch (url.toLowerCase()) {
        case '/':
            renderHTML('index.html', res)
            break;
        case '/experience' :
            renderHTML('./experience.html', res)
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
        case '/assets/style.css':
            res.setHeader('Content-Type', 'text/css')
            const fileContents = fs.readFileSync('Assets/style.css');
            console.log(fileContents)
            res.end(fileContents);
            break
        default:
    }
    res.end()
    

}).listen(3000, () => {
    console.log('Server Listen = 3000')
});
