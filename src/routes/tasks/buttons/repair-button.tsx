import { checkIcon } from "../../../components/icons/check";
import { useTaskContext } from "../../../context/tasks/tasks-context";
import { BaseButtonProps } from "./base.props";

export type RepairButton = BaseButtonProps & {
    isRepair: boolean,
    isEditing: boolean
}

function RepairButton({ taskId, isRepair, isEditing }: RepairButton) {

    const { dispatch } = useTaskContext();

    const handleToggleRepair = () => {
        if (isEditing)
        dispatch({
            type: "TOGGLE_IS_REPAIR",
            payload: {
                taskId: taskId
            }
        })
    }

  return (
    <div
     className={
                `flex items-center gap-2 px-4 py-1 rounded-md 
                ${(isEditing) ? "hover:cursor-pointer" : "hover:cursor-default"}
                ${isRepair ? "bg-green-600" : "bg-main"}
                ${isEditing && "hover:bg-green-500"}`
              }
     onClick={handleToggleRepair}
     >
      <span className="pb-[3px]">
        {checkIcon({ width: "1.3em", height: "1.3em" })}
      </span>
      <span>Reparación</span>
    </div>
  );
}

export default RepairButton;
