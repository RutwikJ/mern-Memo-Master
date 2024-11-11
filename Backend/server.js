import express from 'express';
const app= express();
const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`)
});
app.get('/',(req,res)=>{
    res.send('aila jadu')
})