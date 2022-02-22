import supertest from "supertest";
import app from '../index'
//create request object
const request = supertest(app);

//add description 
describe('test first endpoint',()=>{
it('test Get the / endpoint', async () => {
    const response =await request.get('/');
    console.log(response);
    expect(response.status).toBe(200);
})
});
/*app.get('/', (req, res)=>{
    //console.log('great work thanks Udcity');
    //req.send(200).send('Server is Okay');
    res.json({
        message:"Hellow First Rout",
        //req.status(200),
    });
});*/