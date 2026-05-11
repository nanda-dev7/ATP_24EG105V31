
import exp from 'express'
import { userApp } from './APIs/UserAPI.js';
import { productApp } from './APIs/PorductAPI.js';

const app = exp();

app.use(exp.json());

// middleware
function middleware1(req,res,next){
    console.log("middleware1");
    next();
}

function middleware2(req,res,next){
    console.log("middleware2");
    next();
}

app.use(middleware1);
app.use(middleware2);

app.use('/user-api',userApp)
app.use('/product-api',productApp)

const port = 3000;
app.listen(port, () => console.log(`server listening port number ${port}...`));












