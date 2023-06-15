"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const { text } = req.body;
    // const text = (req.body as { text: string }).text
    console.log(req.body);
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).send({ status: "success", data: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(200).send({ status: "success", data: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    ;
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, text);
    res.status(200).send({ status: "success", data: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const { id } = req.params;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    ;
    console.log("TODOS ------>>", TODOS);
    const filteredTodo = TODOS.filter(todo => todo.id !== id);
    console.log("filtered ------->>", filteredTodo);
    res.status(200).send({ status: "success", data: filteredTodo });
};
exports.deleteTodo = deleteTodo;
