const express = require('express');
const app = express();
const items = [
    {name:'우유',price:2000},
    {name:'홍차',price:5000},
    {name:'커피',price:4000},
]

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('<h1>hi</h1>')
})

app.get('/data.html',(req,res)=>{
    var list = ''
         items.forEach((item)=>{ 
          list+=`<div>
            <h1>${item.name}</h1>
            <h2>${item.price}</h2>
           </div>`
        });
    console.log(list)
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
   ${list}
    </body>
    </html>`
    )
})
app.get('/data.json',(req,res)=>{
    res.send(items)
}) 

app.listen(3001,()=>{
    console.log('Server Running at http://127.0.0.1:3001')
})