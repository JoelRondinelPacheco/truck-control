import { checkReadyIcon } from '../../../components/icons/check-ready'

function EditButton() {
  return (
    <div className='p-2 rounded-md bg-green-500 hover:cursor-pointer'>
        {checkReadyIcon()}
    </div>
  )
}

export default EditButton