import * as mysql from 'mysql2';
import * as dotenv from "dotenv";
dotenv.config();


const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'GeneradorFenix',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000 // Aumenta el tiempo de espera a 10 segundos
});
  
export default db.promise()