import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import router_Middleware from './src/middleware/routes.middleware.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(path.resolve(), 'public')));

app.use(router_Middleware);

const port = 3000 || process.env.PORT;

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
