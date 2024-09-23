import "./App.scss";
import { UserInput } from "../components/UserInput";
import { ImpossibleFlow} from "../components/ImpossibleFlow";
import { DailyFlow } from "../components/DailyFlow";
import Graph from "../assets/graph-pic/graph1.png"
import { useState } from "react";

const App = () => {
    const [startDate, setStartDate] = useState("2024-05-03"); // Valeur par défaut
    const [endDate, setEndDate] = useState("2024-07-20"); // Valeur par défaut

    const [filters, setFilters] = useState({
        agregat: false,
        tresorie: false,
        obligation: false,
    });
    const handleDateChange = (start, end) => {
        setStartDate(start);
        setEndDate(end);
    };
console.log(filters);
  
    const handleCheckboxChange = (updatedFilters) => {
        setFilters(updatedFilters);
    };
   

    return (
        <div className="flex flex-row gap-10 bg-gray-300 h-full p-1">
            <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-2">
                    <label>
                        <input 
                            type="checkbox" 
                            checked={filters.agregat}
                            onChange={(e) => handleCheckboxChange({ ...filters, agregat: e.target.checked })}
                        />
                        agregat
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={filters.tresorie}
                            onChange={(e) => handleCheckboxChange({ ...filters, tresorie: e.target.checked })}
                        />
                        tresorie
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={filters.obligation}
                            onChange={(e) => handleCheckboxChange({ ...filters, obligation: e.target.checked })}
                        />
                        obligation
                    </label>
                </div>
                <UserInput onDateChange={handleDateChange}/>
                <ImpossibleFlow begin={startDate} end={endDate} filters={filters}/>
                <DailyFlow begin={startDate} end={endDate} filters={filters}/>
                
            </div>
            <div className="border border-gray-300">
                    <img src={Graph} alt="" className="w-[850px]" />
            </div>
        </div>
    )
};

export default App;
