const db = require('../db')
// const queries = require("../SQL/queries")
const queries = {
    addUser : `INSERT INTO  name (fname,lname,api_key) VALUES ($1, $2, $3) returning id;`,
    getUser : `SELECT fname, lname FROM name;`
}

function checkSec (req,res,next){
    console.log('req.query.id',  req.query.id)
    if(req.query.id==='xxx'){
        console.log('kk')
        res.locals = {
            id : req.query.id
        }
        next()
    } else{
        res.status(401).json('You Don\'t have rights to see this.')
    }
}


async function addName (req,res,next){
    let {fname, lname} = req.body 
    try{
        const insertQuery =   queries.addUser
        const insertedID = await db.one(insertQuery,[fname,lname, req.query.id])
        res.status(200).json(insertedID)
    } catch(e){
        console.log(e)
    }
}

async function getName (req,res,next){
    const selectQuery = queries.getUser; 
    const dbNames = await db.query(selectQuery)
    dbNames.length === 0 ?
          res.status(200).json(`there are no names in the database.`):
          res.status(200).json(dbNames)
}

module.exports = {
    addName, 
    checkSec,
    getName
}