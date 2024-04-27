import express, { request, response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json( )); // Middleware for parsing JSON bodies
app.use(cors());

// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         methods:["GET",'POST',"PUT","DELETE"],
//         allowedHeaders:['content-Type']
//     })
// )


app.use('/books',booksRoute)

app.get('/',(request,response)=>{
    console.log(response)
    return response.status(304).send({message:"Welcome to the API"})
})

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App connected database");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error)=>{
        console.error(error)
    })
   


