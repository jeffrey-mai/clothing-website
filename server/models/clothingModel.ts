import pg, { QueryResult } from 'pg';
import { ItemType } from '../../types';
import dotenv from 'dotenv';

dotenv.config();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const { Pool } = pg;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  idleTimeoutMillis: null,
});

async function startDB() {
  await pool.connect();
  // const fetchedData = {};

  // const createClothingTableQuery = `
  //   CREATE TABLE IF NOT EXISTS clothes (
  //     id SERIAL PRIMARY KEY,
  //     title VARCHAR(225),
  //     price REAL,
  //     description TEXT,
  //     category VARCHAR(225),
  //     image VARCHAR(225),
  //     rating_rate NUMERIC(3, 1),
  //     rating_count INTEGER
  //   )
  // `;

  // const insertClothingDataQuery = `
  //   INSERT INTO clothes (id, title, price, description, category, image, rating_rate, rating_count)
  //   VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  // `;
  
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

startDB();
const db = {
  query: (text: string, params: any[]): Promise<QueryResult<ItemType[]>> => {
    console.log('executed query', text);
    return pool.query(text, params);
  }
}

export default db;