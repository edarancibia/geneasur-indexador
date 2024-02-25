import express, { Request, Response } from 'express';
import mysql, { Connection } from 'mysql2/promise'; // Importamos mysql2/promise
import dbConfig from '../src/config/db'; // Importamos la configuración de la base de datos

const app = express();
const PORT = process.env.PORT || 3000;

async function connectToDatabase(): Promise<Connection> {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL database');
    return connection;
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
    throw error;
  }
}

app.get('/', async (req: Request, res: Response) => {
  try {
    const connection = await connectToDatabase();
    
    // Realizamos una consulta de ejemplo
    const [rows, fields] = await connection.query('SELECT * FROM tu_tabla');
    
    await connection.end();
    
    res.send('¡Hola Mundo! Consulta realizada: ' + JSON.stringify(rows));
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
