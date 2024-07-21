import { useTaskContext } from '../../../context/tasks/tasks-context'
import Task from '../task/task';
//<div className='space-y-6 h-[500px] overflow-y-auto overflow-scroll'>
function TaskContainer() {
    const { tasks } = useTaskContext();
  return (
    
<section className='flex flex-col gap-4 h-[100px] overflow-scroll  grow'>

        {
            tasks.map((task) => <div key={task.id}><Task {...task}/></div>)
        }
        </section>
  )
}

export default TaskContainer