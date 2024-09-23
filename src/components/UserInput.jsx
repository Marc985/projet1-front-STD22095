export const UserInput=()=>{
    return(
            <div className="bg-white p-1 rounded-sm flex flex-col gap-1 items-center justify-center">
                    <div className="flex flex-row gap-2">
                        <label >
                            <input type="checkbox" />
                            agregat
                        </label>
                        <label >
                            <input type="checkbox" />
                            tresorie
                        </label>
                        <label >
                            <input type="checkbox" />
                            obligation
                        </label>
                    </div>
                    <div className="flex flex-row gap-3">
                        <label className="flex flex-row gap-1">
                            <div>de</div>
                            <input type="date"  className="border border-black rounded-sm"/>
                        </label>
                        <label className="flex flex-row gap-1">
                            <div>à</div>
                            <input type="date"  className="border border-black rounded-sm"/>
                        </label>
                    </div>
            </div>
    )
}