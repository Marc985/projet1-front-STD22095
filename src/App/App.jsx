import "./App.scss";
import { UserInput } from "../components/UserInput";
import { ImpossibleFlow } from "../components/ImpossibleFlow";
import { DailyFlow } from "../components/DailyFlow";
import Graph from "../assets/graph-pic/graph1.png";
import Graph2 from "../assets/graph-pic/graph2.png";
import Graph3 from "../assets/graph-pic/graph3.png";
import { useState } from "react";

const App = () => {
    const [startDate, setStartDate] = useState("2024-05-03");
    const [endDate, setEndDate] = useState("2024-07-20");
    const [filters, setFilters] = useState({
        agregat: true,
        tresorie: false,
        obligation: false,
    });

    const handleDateChange = (start, end) => {
        setStartDate(start);
        setEndDate(end);
    };

    const handleCheckboxChange = (updatedFilters) => {
        setFilters(updatedFilters);
    };

    const getImageForFilters = () => {
        const checkedCount = Object.values(filters).filter(Boolean).length; 
    
        if (checkedCount === 1) {
           
            if (filters.agregat) return Graph; 
            if (filters.tresorie) return Graph2;
            if (filters.obligation) return Graph3; 
        } else if (checkedCount === 2) {
            if (filters.agregat && filters.tresorie) return Graph2; 
            if (filters.agregat && filters.obligation) return Graph3; 
            if (filters.tresorie && filters.obligation) return Graph; 
        } else if (checkedCount === 3) {
            return Graph3; 
        }
    
        return null; 
    };

    const selectedImage = getImageForFilters();

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
                <UserInput onDateChange={handleDateChange} />
                <ImpossibleFlow begin={startDate} end={endDate} filters={filters} />
                <DailyFlow begin={startDate} end={endDate} filters={filters} />
            </div>
            <div className="border border-gray-300">
                {selectedImage && <img src={selectedImage} alt="Graph" className="w-[850px]" />}
            </div>
        </div>
    );
};

export default App;
