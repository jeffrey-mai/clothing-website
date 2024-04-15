const { Pool } = require('pg');
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  ssl: {
    require: true,
  },
  idleTimeoutMillis: null,
});

// pool.connect();

async function startDB() {
  await pool.connect();
  const fetchedData = {};

  const createClothingTableQuery = `
    CREATE TABLE IF NOT EXISTS clothes (
      id SERIAL PRIMARY KEY,
      title VARCHAR(225),
      price REAL,
      description TEXT,
      category VARCHAR(225),
      image VARCHAR(225),
      rating_rate NUMERIC(3, 1),
      rating_count INTEGER
    )
  `;

  const insertClothingDataQuery = `
    INSERT INTO clothes (id, title, price, description, category, image, rating_rate, rating_count)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `;
  
  // try {
  //   await pool.query(createClothingTableQuery);
  // } catch (err) {
  //   console.log(err);
  // }

  // await fetch("https://fakestoreapi.com/products")
  //   .then(response => response.json())
  //   .then(data => {
  //     fetchedData = data;
  //     return;
  //   })
  //   .catch(err => {console.log("Error: " + err)})

  // for(const obj of fetchedData){
  //   const values = [
  //     obj.id, obj.title, obj.price, obj.description, 
  //     obj.category, obj.image, obj.rating.rate, obj.rating.count
  //   ];
  //   await pool.query(insertClothingDataQuery, values);
  // }
  
  return;
}

// startDB();

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};