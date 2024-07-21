import  { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';
import { errorIcon } from '../../../../components/icons/error';
import { useTaskContext } from '../../../../context/tasks/tasks-context';

const DialogRemoveTask = ({taskId} : { taskId: string}) => {

  const { dispatch } = useTaskContext();
  const [open, setOpen] = useState(false);

  
  const handleRemoveTask = () => {
    dispatch({
      type: "REMOVE_TASK",
      payload: {
        taskId: taskId,
      },
    });
    setOpen(false);
  }
return (
  <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild>
      <button className="flex items-center gap-2 px-4 rounded-md bg-red-300 hover:cursor-pointer hover:bg-red-400">Eliminar <span className="pl-2 pb-[2px]">
        {errorIcon({ width: "1.2em", height: "1.2em" })}
      </span></button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle text-slate-900">Confirmar eliminar tarea</Dialog.Title>
        <Dialog.Description className="DialogDescription text-slate-800">
          Al confirmar la tarea se eliminara
        </Dialog.Description>
        <div className="flex mt-4 gap-2 justify-end">
        <Dialog.Close asChild>
            <button className="Button bg-main hover:cursor-pointer">Volver</button>
          </Dialog.Close>
            <button className="Button bg-red-500 hover:cursor-pointer" onClick={handleRemoveTask}>Eliminar</button>          
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            {errorIcon()}
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
};

export default DialogRemoveTask;
