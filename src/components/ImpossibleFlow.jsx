import { FlowList } from "../utils/FlowList";
import data from "../mockData/data.json"
export const ImpossibleFlow=({begin,end})=>{
   
    return (
        <FlowList type={"flux impossible"} data={data.data} beginDate={begin} endDate={end} />
    )
}