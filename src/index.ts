import express from 'express';
const app = express();

const port = 3250;

app.listen(port, ()=>{
    console.log(`The server is run on http://localhost:${port}`);
    //req.status(200).res.send('Great Udacity');
});

app.get('/', (req, res)=>{
    //console.log('great work thanks Udcity');
    //req.send(200).send('Server is Okay');
    res.json({
        message:"Hellow First Rout",
        //req.status(200),
    });
});

export default app;