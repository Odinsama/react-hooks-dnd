
import React,{useReducer} from 'react'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import {toArray} from 'src/SortableTree/toArray'
import {endDragReducer} from './endDragReducer'
import {initialState} from './initialState'
import styled from 'styled-components'

const onDragStart = () => {
    document.body.style.color = 'orange'
}
const onDragUpdate = (data, {destination}) => {
    const opacity = destination ? destination.index / Object.keys(data.tasks).length : 0
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity}`
    document.body.style.transition = 'background-color color 0.2s ease'
}
const Container = styled.div``
const MemoizedColumn = React.memo(({column, taskMap, index}) => {
    const tasks = column.taskIds.map(taskId => taskMap[taskId])
    return <Column column={column} tasks={tasks} index={index}/>
})


export const SortableTree = () => {
    const [data, dispatch] = useReducer(endDragReducer, initialState)


    return (
        <DragDropContext
            onDragStart={onDragStart}
            onDragUpdate={(update) => onDragUpdate(data, update)}
            onDragEnd={(result) => {
                document.body.style.color = 'inherit'
                document.body.style.backgroundColor = 'inherit'
                dispatch(result)
            }}
        >
            <Droppable
                droppableId={'dropZone'}
                direction={'vertical'}
                type={'node'}
            >
                {(provided) => (
                    <Container
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {toArray(data.nodes).map((node, i) => {
                            return <MemoizedColumn key={column.id} column={column} taskMap={data.tasks} index={i}/>
                        })}
                    </Container>
                )}
            </Droppable>
        </DragDropContext>
    )
}