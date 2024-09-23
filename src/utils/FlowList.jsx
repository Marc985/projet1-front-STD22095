export const FlowList = ({ type, data,beginDate,endDate }) => {
console.log("reo le daty",beginDate,endDate);
    const fluxImpossilble=data.filter(d=>d.type==="fluxImpossilbe"&&
        new Date(d.date) >= new Date(beginDate) && 
        new Date(d.date) <= new Date(endDate)
       
    )
    const dailyFlux=data.filter(d=>d.type==="fluxJournalier"&&

        new Date(d.date) >= new Date(beginDate) && 
        new Date(d.date) <= new Date(endDate)
    )
    return (
        <div className="bg-white h-[250px]">
            <h1>{type}</h1>
            <ul>
                {type === "flux impossible" && fluxImpossilble.map((d, index) => (
                    <li key={index}>{d.desc}</li>
                ))}
                {type === "flux journalier" && dailyFlux.map((d, index) => (
                    <li key={index}>{d.desc}</li>
                ))}
            </ul>
        </div>
    );
};
