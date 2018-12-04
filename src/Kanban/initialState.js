export const initialState = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage'},
        'task-2': { id: 'task-2', content: 'Watch EU LCS'},
        'task-3': { id: 'task-3', content: 'Eat chicken wings'},
        'task-4': { id: 'task-4', content: 'Attend boring meeting'},
        'task-5': { id: 'task-5', content: 'Write a bad commit message'},
        'task-6': { id: 'task-6', content: 'study Japanese'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6']
        },
        'column-2': {
            id: 'column-2',
            title: 'Doing',
            taskIds: []
        }
    },
    columnOrder: ['column-1', 'column-2']
}