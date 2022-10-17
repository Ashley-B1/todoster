import { Router } from 'express';
import { getAllTodos, getTodo, deleteTodo, updateTodo, createTodo } from '../controllers/todo'

const router: Router = Router();

router.get('/', getAllTodos);
router.get('/:id', getTodo);
router.delete('/:id', deleteTodo);
router.put('/:id', updateTodo);
router.post('/', createTodo);

export default router;
