import React from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import {DraggableTask} from './DraggableTask'

const Container = styled.div`
    margin: 8px
    border: 1px solid lightgrey
    border-radius: 2px
    width: 220px
    
    display: flex
    flex-direction: column
    flex-grow: 1

`
const Title = styled.h3`
    padding: 8px
`
const TaskList = styled.div`
    padding: 8px
    transition: background-color 0.2s ease
    background-color: ${props => props.isDraggingOver ? 'lightgrey' : 'white'}
    flex-grow: 1
`
const MemoizedTasks = React.memo(({tasks}) => tasks.map((task, i) => <DraggableTask key={task.id} task={task} index={i}/>))
export const Column = ({column, tasks, index}) => {
    return (
        <Draggable draggableId={column.id} index={index} type={'column'}>
            {(provided) => (
            <Container
                {...provided.draggableProps}
                ref={provided.innerRef}
            >
                <Title
                    {...provided.dragHandleProps}
                >{column.title}</Title>
                <Droppable droppableId={column.id} isDropDisabled={column.id === 'column-1'} type={'task'}>
                    {(provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            isDraggingOver={snapshot.isDraggingOver}
                            {...provided.droppableProps}
                        >
                            <MemoizedTasks tasks={tasks}/>
                        </TaskList>)}
                </Droppable>
            </Container>)}
        </Draggable>
    )
}