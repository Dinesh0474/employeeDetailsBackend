const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 8000;


app.post("/create",async(req,res) => {
    try{
        const {name,dept,designation,salary,address,dob,doj,email} = await req.body;
        const newDetails = await pool.query("INSERT INTO details (name,dept,designation,salary,address,dob,doj,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8)",[name,dept,designation,salary,address,dob,doj,email])
        res.status(200).json(newDetails);
    } catch (err){
        console.error(err.message)
    }
})

app.get("/display",async(req,res)=>{
    try{
        const allDEtails = await pool.query("SELECT * FROM details ")
        res.json(allDEtails.rows).status(200);
    }catch(err){
        console.error(err.message)
    }
})

app.get("/display/:id",async (req,res) => {
    try{
        const {id} = req.params;
        const details = await pool.query("SELECT * FROM details WHERE employee_id =$1" ,[id]);
        res.json(details.rows[0]).status(200)
    }
    catch(err){
        console.error(err.message)
    }
})


app.listen(PORT,() => {
    console.log("server running")
})

module.exports = app;