const express =require('express');
const  errorHandler= require('./middleware/errorHandler');
const dotenv =require("dotenv").config()
const  connectDB =require('./config/db')

connectDB();
const app=express();

const port=process.env.PORT||3000;

app.use(express.json()); //we use body parser to parse the data that we're getting from the client
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/users/', require('./routes/UserRoutes'))
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`server is listening at ${port}`)
})