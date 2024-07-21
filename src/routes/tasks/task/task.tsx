import Button from "../../../components/button/button";
import { TaskEntity } from "../../../lib/task/domain/task.entity";
import { useState } from "react";
import RemoveButton from "../buttons/remove-button";
import DoneButton from "../buttons/done-button";
import RepairButton from "../buttons/repair-button";
import TypeButton from "../buttons/type";
import EditButton from "../buttons/edit-button";
import CalendarButton from "../buttons/calendar-button";
import InReportButton from "../buttons/in-report-button";

function Task(task: TaskEntity) {
  const [description, setDescription] = useState("");
  const { patente, name, isRepair, inReport, isEditing,  isDone, id, date, dateStr, isSaved } = task


  return (
    <section className="flex flex-col gap-2 m-h-[250px] border-b-2 border-slate-400 pb-4 mb-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Button>{patente}</Button>
          <CalendarButton date={date.toLocaleDateString()} dateStr={dateStr} />
          <Button>{name}</Button>
          </div>
          <div>
            {
              inReport && <InReportButton />
            }
          </div>
      </div>
      <div className="px-1">
        <textarea
          className={`w-full rounded-md resize-none text-slate-800 bg-area p-2 px-3 ${isSaved && "border-orange-400 border-2"}`}
          rows={4}
          value={description}
          placeholder="Ingresar..."
          onChange={(e) => setDescription(e.target.value)}
          disabled={!isEditing}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
            <RepairButton taskId={id} isRepair={isRepair} isInReport={inReport} isEditing={isEditing}/>
            <TypeButton />
        </div>
        <div className="flex gap-2">
        <RemoveButton taskId={id} isInReport={inReport}/>
          <EditButton taskId={id} isEditing={isEditing} isInReport={inReport}/>
          { inReport &&
            <DoneButton taskId={id} isDone={isDone}  isInReport={inReport}/>
            

          }
        </div>
      </div>
    </section>
  );
}

export default Task;
