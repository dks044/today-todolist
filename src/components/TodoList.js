import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../contexts/TodoContext";

const TodoListBlock = styled.div`
    flex:1;
    padding-top: 22px;
    padding-left: 22px;
    padding-right: 15px;
    overflow-y: auto;
`;


export default function TodoList(){
    const todos = useTodoState();
    return (
        <TodoListBlock>
           {todos.map(todo =>(
            <TodoItem id={todo.id} key={todo.id} text={todo.text} done={todo.done}/>
           ))}
        </TodoListBlock>    
    )
}