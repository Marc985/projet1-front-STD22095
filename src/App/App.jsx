import "./App.scss";
import { UserInput } from "../components/UserInput";
import { ImpossibleFlow} from "../components/ImpossibleFlow";
import { DailyFlow } from "../components/DailyFlow";
import Graph from "../assets/graph-pic/graph1.png"
import { useState } from "react";

const App = () => {
    const [startDate, setStartDate] = useState("2024-05-03"); // Valeur par défaut
    const [endDate, setEndDate] = useState("2024-07-20"); // Valeur par défaut

    const handleDateChange = (start, end) => {
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div className="flex flex-row gap-10 bg-gray-300 h-full p-1">
            <div className="flex flex-col gap-6">
                <UserInput onDateChange={handleDateChange}/>
                <ImpossibleFlow begin={startDate} end={endDate}/>
                <DailyFlow begin={startDate} end={endDate}/>
                
            </div>
            <div className="border border-gray-300">
                    <img src={Graph} alt="" className="w-[850px]" />
            </div>
        </div>
    )
};

export default App;
