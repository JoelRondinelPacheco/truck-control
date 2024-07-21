import { tomorrowDate } from "../../lib/common/utils/dates";
import { getUuid } from "../../lib/common/utils/uuid";
import { TaskContextState } from "./tasks-context";

interface AddTask {
    type: "ADD_TASK",
}

interface RemoveTask {
    type: "REMOVE_TASK",
    payload: {
        taskId: string
    }
}

interface ToggleIsDone {
    type: "TOGGLE_IS_DONE",
    payload: {
        taskId: string
    }
}

interface ToggleIsRepair {
    type: "TOGGLE_IS_REPAIR",
    payload: {
        taskId: string
    }
}

interface ToggleIsEditing {
    type: "TOGGLE_IS_EDITING",
    payload: {
        taskId: string
    }
}

interface Print {
    type: "PRINT",
}

interface SaveAll {
    type: "SAVE_ALL"
}

export type TasksReducerAction = AddTask | RemoveTask | ToggleIsDone | ToggleIsRepair | ToggleIsEditing | Print | SaveAll

export type TasksReducer = (state: TaskContextState, action: TasksReducerAction) => TaskContextState

const tasksReducer: TasksReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {...state, tasks: [...state.tasks, {
                id: getUuid(),
                patente: "AA123AA",
                name: "Nombre",
                isRepair: false,
                isDone: false,
                type: "",
                inReport: false,
                dateStr: "Mañana",
                date: tomorrowDate(),
                isEditing: true,
                isSaved: false,
            }]}
        case "TOGGLE_IS_DONE":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.taskId)
            }
        case "TOGGLE_IS_REPAIR":
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.taskId ? {...task, isRepair: !task.isRepair} : task)
            }
        case "TOGGLE_IS_EDITING":
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.taskId ? {...task, isEditing: !task.isEditing, isSaved: true} : task)
            }
        case "REMOVE_TASK":
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload.taskId)}
        case "PRINT":
            return {
                ...state,
                tasks: state.tasks.map(task => task.isSaved ? {...task, inReport: true, isEditing: false} : task)
            }
        case "SAVE_ALL":
            return {
                ...state,
                tasks: state.tasks.map(task => ({... task, isSaved: true, isEditing: false}))
            }
        default:
            return {...state};
    }
}

export default tasksReducer;