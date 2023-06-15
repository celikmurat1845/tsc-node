import { RequestHandler } from "express";
import { Todo } from "../models/todo";


const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const { text }: { text: string } = req.body;
    // const text = (req.body as { text: string }).text
    console.log(req.body)
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).send({ status: "success", data: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.status(200).send({ status: "success", data: TODOS })
};

export const updateTodo: RequestHandler<{ id: string, text: string }> = (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;

    const todoIndex = TODOS.findIndex(todo => todo.id === id);

    if (todoIndex < 0) {
        throw new Error('Could not find todo!')
    };

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text);

    res.status(200).send({ status: "success", data: TODOS[todoIndex] });

};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const { id } = req.params;

    const todoIndex: number = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!')
    };
    console.log("TODOS ------>>", TODOS)
    const filteredTodo: Todo[] = TODOS.filter(todo => todo.id !== id);
    console.log("filtered ------->>", filteredTodo)

    res.status(200).send({ status: "success", data: filteredTodo })
};