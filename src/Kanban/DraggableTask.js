import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import {Task} from './Task'
import styled from 'styled-components'

const Container = styled.div``

export const DraggableTask = ({task, index}) => <Draggable
    type={'task'}
    draggableId={task.id}
    index={index}
    isDragDisabled={false}
>
    {(provided, snapShot) => (
        <Container
            ref={provided.innerRef}
            isDragging={snapShot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
        >
        <Task
            content={task.content}
        />
        </Container>
    )}
</Draggable>