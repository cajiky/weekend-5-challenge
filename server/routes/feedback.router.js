const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET all feedback that was posted to the db
router.get('/Admin',(req,res)=>{
    //find all responses and return them to admin page
    pool.query('SELECT * FROM "feedback";').then((result)=>{
        res.send(result.rows);
    })
    .catch((error)=>{
        res.sendStatus(500);
    })
})

router.post('/', (req,res)=>{
    
})