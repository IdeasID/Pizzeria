import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { createRoles } from './lib/init.js';
// Import Routes
import CategoryRoutes from './routes/category.routes.js';
import ProductRoutes from './routes/product.routes.js';
import UserRoutes from './routes/user.routes.js';
import RoleRoutes from './routes/role.routes.js';
import AuthRoutes from './routes/auth.routes.js';
// Instanciando Express
const app = express();
//Crea roles si no existen en la db
createRoles();
// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// EndPoint
app.use('/api/categorys', CategoryRoutes);
app.use('/api/products', ProductRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/roles', RoleRoutes);
app.use('/api/auth', AuthRoutes);

export default app;
