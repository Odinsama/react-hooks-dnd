export function endDragReducer(state, {destination, source, draggableId, type}){
    if (!destination) return state
    if(destination.droppableId === source.droppableId &&
        destination.index === source.index) return state

    switch(type){
        case 'column':
            const newColumnOrder = [...state.columnOrder]
            newColumnOrder.splice(destination.index, 0, newColumnOrder.splice(source.index, 1))
            return {...state, columnOrder: newColumnOrder}
        case 'task':
            const start = state.columns[source.droppableId]
            const finish = state.columns[destination.droppableId]

            if(start === finish) {
                const newTaskIds = [...start.taskIds]
                newTaskIds.splice(destination.index, 0, newTaskIds.splice(source.index, 1))

                const newColumn = {
                    ...start,
                    taskIds: newTaskIds,
                }
                return {
                    ...state,
                    columns: {
                        ...state.columns,
                        [newColumn.id]: newColumn
                    }
                }
            }
            // Moving from one list to another
            // Removing task from it's origin
            const startTaskIds = [...start.taskIds]
            startTaskIds.splice(source.index, 1)
            const newStart = {
                ...start,
                taskIds: startTaskIds
            }
            // Adding task to it's destination
            const finishTaskIds = [...finish.taskIds]
            finishTaskIds.splice(destination.index, 0, draggableId)
            const newFinish = {
                ...finish,
                taskIds: finishTaskIds
            }
            return {
                ...state,
                columns: {
                    ...state.columns,
                    [start.id]: newStart,
                    [finish.id]: newFinish,
                }
            }
        default: return state
    }


}