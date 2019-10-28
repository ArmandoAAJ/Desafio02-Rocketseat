//  importando apenas o Router e não todo o express;
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.put('/users', authMiddleware, UserController.update);
// STUDENTS AMBOS RECEBEM OS authMIDDLEWARE PARA AUTENTICAÇÃO
// STUDENTcONTROLLER VAI RECEBER UM ID VIA URL PARA FAZER O UPDATE NO STUDENT CERTO
routes.post('/students', authMiddleware, StudentController.store);
routes.put('/students/:id', authMiddleware, StudentController.update);
export default routes;
