import "./App.scss";
import { UserInput } from "../components/UserInput";
import { ImpossibleFlow} from "../components/ImpossibleFlow";
import { DailyFlow } from "../components/DailyFlow";
import Graph from "../assets/graph-pic/graph1.png"


const App = () => {
 

    return (
        <div className="flex flex-row gap-10 bg-gray-300 h-full p-1">
            <div className="flex flex-col gap-6">
                <UserInput/>
                <ImpossibleFlow/>
                <DailyFlow/>
                
            </div>
            <div className="border border-gray-300">
                    <img src={Graph} alt="" className="w-[850px]" />
            </div>
        </div>
    )
};

export default App;
