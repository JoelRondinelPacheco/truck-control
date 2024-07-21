import { createContext, useContext, useReducer } from "react";
import { TaskEntity } from "../../lib/task/domain/task.entity";
import tasksReducer, { TasksReducerAction } from "./task-reducer";
import { getUuid } from "../../lib/common/utils/uuid";
import { tomorrowDate } from "../../lib/common/utils/dates";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export type TastkContext = {
  tasks: TaskEntity[];
  dispatch: React.Dispatch<TasksReducerAction>;
};

export type TaskContextState = {
  tasks: TaskEntity[];
};

const intialState: TaskContextState = {
  tasks: [
    {
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
    },
  ],
};
/*
    Primera task vacia
    Agrega vacia?
    Eliminar ultima, dejar una task vacia?
*/
const TaskContext = createContext<TastkContext | null>(null);

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(tasksReducer, intialState);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("Context error message");
  }

  return context;
}
