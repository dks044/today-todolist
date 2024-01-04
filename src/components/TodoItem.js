import React from "react";
import styled from "styled-components";
import { FaRegCheckCircle,FaCheckCircle} from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    margin-left: 20px;
    ${props =>
    props.done &&`color: #ced4da;`
    }
`;

export default function TodoItem( {id,done,text} ){
    const mdDoneStyle = {
        cursor: "pointer"
    };

    const TodoItemBlock = styled.div`
        display: flex;
        align-items: center;
        padding-top: 12px;
        padding-bottom: 12px;
        &:hover {
            ${Remove} {
            display: initial;
            }
        }
    `;

    return(
        <TodoItemBlock>
            {done ? <FaCheckCircle style={mdDoneStyle} size={20} /> : <FaRegCheckCircle style={mdDoneStyle} size={20}/>}
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    )
}