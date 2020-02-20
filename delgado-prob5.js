require('dotenv').config()
//  console.log(process.env.DB_HOST)
//   console.log(process.env.DB_USER)
//   console.log(process.env.DB_DATABASE)
//  console.log(process.env.DB_HOST)
//   console.log(process.env.DB_PORT)

const { Pool } = require('pg') 
const pool = new Pool({
     user: `${process.env.DB_USER}`, 
     host: `${process.env.DB_HOST}`,
     database: `${process.env.DB_DATABASE}`, 
     password: `${process.env.DB_PASSWORD}`, 
     port: process.env.DB_PORT, 
     ssl:true,
       }) 
     pool.query(`SELECT name, gender, pet_name, family, class
     from pets
     RIGHT JOIN owners
     ON pets.owner_id = owners.owner_id
     WHERE owners.gender = 'Male'` , (error, results) => { 
         if (error) { 
             throw error
                 } console.log(results.rows) 
             })


