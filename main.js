const http = require('http')
const server = http.createServer((request,response)=>{
    
    console.log(request.method)
    console.log(request.url)
    console.log()
    if(request.url ==="/heloo"){
    response.writeHead(200,{
        "Content-type" : "text/html"
    })
    response.write('<meta charset="utf-8"/><h1>안녕하세요</h1>')
    response.end()
    }else{
        response.writeHead(200,{
            "Content-type" : "text/html"
        })
        response.write('<h1>Hello world</h1>')
        response.end()

    }
})

server.listen(3001,()=>{
    console.log('server running at http://127.0.0.1:3001')

})