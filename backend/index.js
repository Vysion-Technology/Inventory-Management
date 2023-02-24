import express from 'express'
import connection from './db/connection.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors'
// import defaultData from './default.js';
import routes from './routes/routes.js';
const app = express();
dotenv.config();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/',routes)

const PART = process.env.PART;
const userName = process.env.DB_USERNAME;
const passward = process.env.DB_PASSWARD;
// const PART = 8000;
// console.log("rotjit")
connection(userName, passward);


app.listen(PART,()=>console.log(`server is runnig on ${PART} port`));

// defaultData();