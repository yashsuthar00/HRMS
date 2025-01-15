import express from 'express';
const app = express();
import routes from '../routes/index.js';

app.use('/api', routes);

let router_Middleware = app;
export default router_Middleware;
