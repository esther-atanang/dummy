// const http = require("http");
// const server = http.createServer((req,res)=>{
// if(req.url == "/"){
//     res.end("Welcome to the home page")
// }
// if(req.url == "/about"){
//     res.end("Welcome to the about page")
// }

// res.end("<h1>Opps!!!</h1><p>We can't seem to find the page that you are looking for <a href="/">home</a></p>")
// })
// server.listen(5000)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)