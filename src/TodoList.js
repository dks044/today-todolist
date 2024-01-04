import React from "react";
import styled from "styled-components";
import TodoItem from "./components/TodoItem";
const TodoListBlock = styled.div`
    flex:1;
    padding-top: 22px;
    padding-left: 22px;
    padding-right: 15px;
    overflow-y: auto;
`;


export default function TodoList(){
    return (
        <TodoListBlock>
            <TodoItem text="프로젝트 생성하기" done={true}/>
            <TodoItem text="프로젝트 배포하기" done={false}/>
        </TodoListBlock>
    )
}