import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// Import Routes
import CategoryRoutes from './routes/categoty.routes.js';

// Instanciando Express
const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// EndPoint
app.use('/api/categorys', CategoryRoutes);

export default app;
