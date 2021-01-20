import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes.js';
//import { config } from './server/configure';

const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());
app.use(cors());

let db = mongoose.connect('mongodb://localhost:27017/nodejs-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useMongoClient: true 
});

//app.set('port', process.env.PORT || 3300);

routes(app);
//config(app);

app.listen(port, () => {
    console.log(`nodejs-api running on port ${port}`);
});
