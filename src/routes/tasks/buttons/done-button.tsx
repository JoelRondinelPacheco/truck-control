
import { BaseButtonProps } from "./base.props";
import DondeDialog from "../task/dialog-task-done/dialog";

type DoneButtonProps = BaseButtonProps & {
    isDone: boolean
}

function DoneButton(props: DoneButtonProps) {
  return (

      <DondeDialog taskId={props.taskId} />


  );
}

export default DoneButton;
