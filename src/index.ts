import express, {Request, Response} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import errorMiddleware from './middleware/error.middleware';
import bodyParser from 'body-parser';
//import { text } from 'node:stream/consumers';
import config from './config';
const app:  express.Application= express();
import db from './database/database';

const Port = config.port || 3250;
//console.log(config);
//const app: Application = express(); 
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
app.use(
    RateLimit({
        windowMs: 60 * 60 * 1000,
        max: 100,
        standardHeaders: true,
        legacyHeaders: false,
        message: 'overload please wait'

    })
)

app.use(bodyParser.json())

app.listen(3250, ()=>{
    console.log(`The server is run on http://localhost:${Port}`);
    //req.status(200).res.send('Great Udacity');
});

app.get('/', (req: Request, res: Response)=>{
    //console.log('great work thanks Udcity');
    res.send(200);
        message: ('Hellow First Rout');
        //req.status(200),
});

app.post('/',(req: Request, res: Response)=>{
    res.json({
        message:
        'Hello Udacity Team, Thank you for your efforts',
        data: req.body,
    });
});

//test database{}
db.connect().then((client) =>{
    return client
    .query('SELECT NOW()')
    .then((res) =>{
        client.release();
        console.log(res.rows);    
    })
    .catch((err) =>{
        client.release();
        console.log(err.stack)
    });
});
//app.use((errorMiddleware),
app.use((_req:Request, res: Response)=>{
    res.status(404).json({
        message:
        'Issue in connection, please configure correctly and try again'
    });
});

export default app;