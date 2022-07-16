const express=require('express');
require('../src/db/conn');
const router=require('./routers/men');

const app=express();
const port=process.env.PORT || 8000;
app.use(express.json());
app.use(router);
app.listen(port);