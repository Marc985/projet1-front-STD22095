import { useState } from "react";
export const UserInput=({onDateChange, onCheckboxChange})=>{
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    
    const [checkboxes, setCheckboxes] = useState({
        agregat: false,
        tresorie: false,
        obligation: false,
    });


    const handleStartDateChange = (event) => {
        const date = event.target.value;
        setStartDate(date);
        onDateChange(date, endDate); // Notify parent about the date change
    };

    const handleEndDateChange = (event) => {
        const date = event.target.value;
        setEndDate(date);
        onDateChange(startDate, date);


    }


    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes((prev) => ({ ...prev, [name]: checked }));
        onCheckboxChange({ ...checkboxes, [name]: checked }); // Notify parent about checkbox changes
    };


    return(
            <div className="bg-white p-1 rounded-sm flex flex-col gap-1 items-center justify-center">
                    <div className="flex flex-row gap-2">
                        <label >
                            <input type="checkbox" 
                             checked={checkboxes.tresorie}
                             onChange={handleCheckboxChange}
                            />
                            agregat
                        </label>
                        <label >
                            <input type="checkbox" 
                             checked={checkboxes.tresorie}
                             onChange={handleCheckboxChange}
                            />
                            tresorie
                        </label>
                        <label >
                            <input type="checkbox" 
                             checked={checkboxes.tresorie}
                        onChange={handleCheckboxChange}
                            />
                            obligation
                        </label>
                    </div>
                    <div className="flex flex-row gap-3">
                        <label className="flex flex-row gap-1">
                            <div>de</div>
                            <input type="date"  className="border border-black rounded-sm"   
                            onChange={handleStartDateChange}/>
                        </label>
                        <label className="flex flex-row gap-1">
                            <div>à</div>
                            <input type="date"  className="border border-black rounded-sm"
                            onChange={handleEndDateChange}
                            />
                        </label>
                    </div>
            </div>
    )
}