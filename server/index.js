import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app= express();

dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended:true}));

app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));

app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req,res) => {
    res.send('Hello to API');
})

//www.mongodb.com/cloud/atlas


//console.log(process.env.CONNECTION_URL, process.env.PORT);

const PORT= process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

