import express, { Application, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app: Application = express();
const PORT: number | string = process.env['PORT'] || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (res: Response): void => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`);
});