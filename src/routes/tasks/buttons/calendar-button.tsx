import { calendrIcon } from '../../../components/icons/calendar';

type CalendarButtonProps = {
    date: string,
    dateStr: string
}

function CalendarButton({date, dateStr}: CalendarButtonProps) {
    return (
        <div className="flex gap-2 items-center rounded-md bg-main px-3 py-1.5">
          
          <span className="pb-[2px]">
            {calendrIcon({ width: "1.3em", height: "1.3em" })}
          </span>
          <span>{dateStr}</span>
          <span>{date}</span>
          
        </div>
      );
}
    

export default CalendarButton