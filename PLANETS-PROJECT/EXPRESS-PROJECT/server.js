const express = require('express');
 const path = require('path');


const messagesRouter = require('./routes/messages.router');
const friendsRouter = require('./routes/freindes.router');
const app = express();

app.set('View engine', 'hbs');
app.set('Views', path.join(__dirname, 'views'));
  


const PORT = 4000;
 



//Middlwware logs request and tells  how long it took it to complete

app.use((req, res, next) => {
    const start = Date.now();    
    next();
    const delta = Date.now() - start;
 console.log(`${req.method} :${req.baseUrl} ${req.url}:${delta}ms`)
}) 


app.get('/', (req,res)=>{
    res.render('index.hbs', {
        title: 'My First Page Using Templating engines',
        caption : 'lets go Skiing '});

})
app.use('/site', express.static(path.join(__dirname,'public')));
// set incoming request to json 
app.use(express.json());
 


//setting middleware for friendsRouter && messagesRouter
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter); 

 

  












app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})