import { openingDays } from "../utils/function"

export const ScheduleList = ({hours}) => {
    
    return (
        <div>
        <li className="list-group-item">{openingDays(hours.days)}: <strong>{hours.to} às {hours.from}</strong></li>
        </div>
    )
}