const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET all feedback that was posted to the db
router.get('/',(req,res)=>{
    //find all responses and return them to admin page
    pool.query('SELECT * FROM feedback').then((result)=>{
        res.send(result.rows);
        console.log(result.rows)
    })
    .catch((error)=>{
        res.sendStatus(500);
    })
})

//POST req to db to post response
router.post('/', (req,res) => {
    console.log('this is our req.body',req.body);
    const feedback = req.body;
    console.log(feedback.feeling);
    const sqlText = `INSERT INTO feedback(feeling,understanding,support,comments)
    VALUES($1,$2,$3,$4);`;
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comment])
    .then((result) =>{
        console.log('posted feedback to db', result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error getting to db', error)
        res.sendStatus(500);
    })
})




module.exports = router;