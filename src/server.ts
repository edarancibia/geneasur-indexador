import express, { Request, Response } from 'express';
import { AppDataSource } from './config/data-source';
import { userRouter } from 'routes/user.routes';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

//app.use('/user', userRouter);

AppDataSource
  .initialize()
  .then(() => {
    console.log('Database has been initialized!')
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })
  
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});

