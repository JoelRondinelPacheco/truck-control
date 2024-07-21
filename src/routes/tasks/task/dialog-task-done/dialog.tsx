import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './styles.css';
import { errorIcon } from '../../../../components/icons/error';
import { checkReadyIcon } from '../../../../components/icons/check-ready';
import { useTaskContext } from '../../../../context/tasks/tasks-context';

const DondeDialog = ({taskId} : { taskId: string}) => {

  const { dispatch } = useTaskContext();
  const [open, setOpen] = useState(false);

  const handleCofirmTaskDone = () => {
    dispatch({
      type: 'TOGGLE_IS_DONE',
      payload: {
        taskId: taskId
      }
    })
    setOpen(false);
  }
return (
  <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild>
      <button className="flex items-center px-4 rounded-md bg-main hover:cursor-pointer hover:bg-green-500">Listo <span className="pl-2 pb-[2px]">
        {checkReadyIcon({width: "1.2rem", height: "1.2rem"})}
      </span></button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle text-slate-900">Confirmar tarea completada</Dialog.Title>
        <Dialog.Description className="DialogDescription text-slate-800">
          Al confirmar la tarea se almacenara, y no estara disponible en esta lista
        </Dialog.Description>
        <div className="flex mt-4 gap-2 justify-end">
        <Dialog.Close asChild>
            <button className="Button bg-main hover:cursor-pointer">Volver</button>
          </Dialog.Close>
            <button className="Button bg-green-500 hover:cursor-pointer" onClick={handleCofirmTaskDone}>Confirmar</button>          
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

export default DondeDialog;
