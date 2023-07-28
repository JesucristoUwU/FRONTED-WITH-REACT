import React from 'react'
import styled from 'styled-components'



const ItemsTareaslista = styled.li`
list-styled: none;
padding: 10px;
boder: 1px solid #ddd;
backgroundColor: ${(props) => {
    return (props.$completed ? '#f0f0f0' : 'transparent')
}};
text-decoration: ${(props) => {
    return (props.$completed ? 'line-through' : 'none')
}};
color: ${(props) => {
    return (props.$completed ? '#555' : '#000')
}};
cursor: pointer;
display: flex;
align-items: center;
justify-content: space-between;
margin-buttom: 5px;

&:hover{
    backgroundColor: ${(props) => {
        return (props.$completed ? '#f0f0f0' : '#e9e9e9')
    }};
}

buttom {
    backgroundColor: ${(props) => {
        return (props.$completed ? '#00c300' : '#f00')
    }};
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    margin-left: 10px;
}`;

const IconCheck = styled.span`
diplay: inline-block;
width: 20px;
heigth: 20px;
border: 1px solid #000;
border-radius: 50%;
background-color: ${(props) => {
    return (props.$completed ? '#00c300' : 'transparent')
}};
position: relative;
margin-right: 10px;


&:after{
    content: '';
    position: absolute;
    top: 5px;
    left: 7px;
    width: 6px;
    heigth: 10px;
    border: solid #fff;
    border-width: 0 2x 2px 0;
    transform: rotate(45deg);
    opacity: ${(props) => {
        return (props.$completed ? '1' : '0')
    }};
}`;

const ItemsTareas = ({tarea, onCambiarEstado, onEliminar}) => {
    const handleCambiarEstado = () => {
        onCambiarEstado(tarea.id)
    }

    const handleEliminar = () => {
        onEliminar(tarea.id)
    }

    return(
        <ItemsTareaslista $completed={tarea.completed} onClick={handleCambiarEstado}>
            <IconCheck $completed={tarea.completed}></IconCheck>
            {tarea.texto}
            <button onClick={handleEliminar} {tarea-completed ? 'completada' : 'incomplete'}/>
        </ItemsTareaslista>
    )
}


