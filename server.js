import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import Routes from './routes/route.js'
dotenv.config();
const app = express();
import Connection from './database/db.js';


const PORT = process.env.port || 5000

const username = process.env.username;
const password = process.env.password;

Connection(username,password);
app.use(express.json())
app.use(bodyParser.json({ extended : true }));
app.use(bodyParser.urlencoded({ extended : true }))
app.use(cors());
app.use('/' ,Routes)

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

