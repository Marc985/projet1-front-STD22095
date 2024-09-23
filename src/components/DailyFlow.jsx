import { FlowList } from "../utils/FlowList";
import data from "../mockData/data.json"
export const DailyFlow=({begin,end})=>{
    return (
        <FlowList type={"flux journalier"} data={data.data} beginDate={begin} endDate={end}/>
    )
}