import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';

import taskRouter from './task';

// Creating a new Express application
const app = express();

// Cors config
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// global.__basedir = __dirname;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Tasks
app.use('/tasks', taskRouter);

// app.listen(process.env.PORT);

const server = http.createServer(app);

server.listen(process.env.PORT);

export default server;
