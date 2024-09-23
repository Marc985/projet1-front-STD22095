import "./App.scss";
import { UserInput } from "../components/UserInput";
import { ImpossibleFlow} from "../components/ImpossibleFlow";


const App = () => {
 

    return (
        <div>
            <div className="border border-black">
                <UserInput/>
                <ImpossibleFlow/>
                <div className="border border-black">
                    <h1>flux journaliers</h1>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default App;
