import { BaseButtonProps } from "./base.props";
import DialogRemoveTask from "../task/dialog-delete-task/dialog";

function RemoveButton(props: BaseButtonProps) {
  
  return (
    <DialogRemoveTask taskId={props.taskId} />
  );
}

export default RemoveButton;
