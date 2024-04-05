const {
    createPool
}=  require('mysql');
const pool = createPool({
    host: "localhost",
    user:'usern',
    password:'1234',
    database:'ishaan'
})
pool.query('select * from details',(err, result,fields) => {
    if (err){
        return console.log(err);
    }
    return console.log(result);
})
