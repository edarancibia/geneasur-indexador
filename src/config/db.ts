import { ConnectionOptions } from 'mysql2';

const dbConfig: ConnectionOptions = {
  host: process.env.HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE ,
};

export default dbConfig;

