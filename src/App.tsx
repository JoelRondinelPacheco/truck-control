import "./App.css";
import TaskContextProvider from "./context/tasks/tasks-context";
import AddTask from "./routes/tasks/add-task/add-task";
import Revision from "./routes/tasks/revision/revision";
import TaskContainer from "./routes/tasks/task-container/task-container";

function App() {
  return (
    <TaskContextProvider>
      <div className="flex h-full">
        <div className="w-3/4 flex flex-col justify-between ">
          <TaskContainer />
            <AddTask />
        </div>
        <div className="">
          <Revision />
        </div>
      </div>
    </TaskContextProvider>
  );
}

export default App;
