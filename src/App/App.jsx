import "./App.scss";
import { UserInput } from "../components/UserInput";
import { ImpossibleFlow} from "../components/ImpossibleFlow";
import { DailyFlow } from "../components/DailyFlow";


const App = () => {
 

    return (
        <div>
            <div className="border border-black">
                <UserInput/>
                <ImpossibleFlow/>
                <DailyFlow/>
            </div>
        </div>
    )
};

export default App;
