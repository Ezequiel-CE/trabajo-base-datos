import express from 'express';
import morgan from 'morgan';
import db from './cfg/database.js';
import personaRouter from './routes/persona.router.js';
import tramiteRouter from './routes/tramite.router.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('tiny'));

app.get('/', (_, res) => {
  res.send('API GO');
});

app.use('/personas', personaRouter);
app.use('/tramites', tramiteRouter);

app.use('*', (_, res) => {
  res.status(404).send('<h1>OPS! the endpoint does not exist :(</h1>');
});

app.listen(port, async () => {
  try {
    await db.authenticate();
    console.info('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
