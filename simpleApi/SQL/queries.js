const queries = {

    addUser : `INSERT INTO  name (fname,lname) VALUES ($1, $2) returning id`


}




module.exports = {
    queries
}