import { Router } from 'express';

import getTasks from './services/find';
import getTask from './services/findOne';
import createTask from './services/create';
import deleteTask from './services/delete';
import updateTask from './services/update';

const router = Router();

// Tasks
router.get('/', getTasks);

// Task
router.get('/:id', getTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export default router;
