import { saveIcon } from "../../../components/icons/save";
import { useTaskContext } from "../../../context/tasks/tasks-context";
import { addIcon } from '../../../components/icons/add';

function AddTask() {
  const { dispatch } = useTaskContext();

  const handleAddTask = () => {
    dispatch({
      type: "ADD_TASK",
    });
  };

  const handlePrintTasks = () => {
    dispatch({
      type: "PRINT",
    });
  };

const handleSaveAllTasks = () => {
  dispatch({
    type: "SAVE_ALL"
  })
}

  return (
    <div className="flex justify-between gap-8 items-center p-2">
      <div
        onClick={handleSaveAllTasks}
      >
        <p
        className="flex gap-2 p-2 px-4 rounded-md bg-slate-600 hover:cursor-pointer"
        ><span>{saveIcon({width: "1.2rem", height: "1.2rem"})}</span><span>Guardar</span></p>
      </div>
      <div
      >
        <span className="hover:cursor-pointer text-main" onClick={handleAddTask}>
          {addIcon({ width: "50px", height: "50px" })}
        </span>
      </div>
      <div
        onClick={handlePrintTasks}
      >
        <h4 className="p-2 rounded-md bg-slate-500 hover:cursor-pointer">Generar informe</h4>
      </div>
    </div>
  );
}

export default AddTask;
