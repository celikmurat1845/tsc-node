import { Router } from "express";
import { createTodo, getTodos, updateTodo, deleteTodo } from "../controllers/todos"

const router = Router();

router
    .post('/', createTodo)
    .get('/', getTodos)
    .patch('/:id', updateTodo)
    .delete('/:id', deleteTodo)


export default router;
