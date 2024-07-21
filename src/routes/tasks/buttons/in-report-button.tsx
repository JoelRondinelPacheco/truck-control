import { fileIcon } from '../../../components/icons/file'

function InReportButton() {
  return (
    <div className='flex items-center gap-2 rounded-md bg-slate-500 p-2 px-4'>
        <span>Tarea en reporte</span><span>{fileIcon({width: "1.2rem", height: "1.2rem", strokeWidth: "0.5"})}</span>
    </div>
  )
}

export default InReportButton