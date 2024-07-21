import { editIcon } from '../../../components/icons/edit-icon'
import { BaseButtonProps } from './base.props'
import { useTaskContext } from '../../../context/tasks/tasks-context'
import { saveIcon } from '../../../components/icons/save'
type EditButtonProps = BaseButtonProps &{
  isEditing: boolean
}
function EditButton({ taskId, isEditing }: EditButtonProps) {

  const { dispatch } = useTaskContext();
  const handleToggleEdit = () => {
    dispatch({
      type: "TOGGLE_IS_EDITING",
      payload: {
        taskId
      }
    })
  }
  return (
    <div className={`p-1.5 px-4 flex items-center bg-main gap-2 rounded-md hover:cursor-pointer text-zinc-100`} onClick={handleToggleEdit}>
      {isEditing ? <span>Guardar</span> : <span>Editar</span>}<span className=''>{isEditing ? saveIcon({width: "20px", height: "20px"}) : editIcon({width: "20px", height: "20px"})}</span>

    </div>
  )
}

export default EditButton