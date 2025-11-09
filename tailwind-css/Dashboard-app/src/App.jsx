import { Button } from "./components/Button";
import MainCard from "./components/MainCard";
import PProcessedCard from "./components/PProcessedCard";
import PriceCard from "./components/PriceCard";

const App = () => {
    return (
        <>
            <div className="flex">
                <div className="flex-1">
                    <MainCard title={'Amount processed'} orderCount={'13'} amount={'100,00.20'}></MainCard>
                </div>
                <div className="flex-1">
                    <PriceCard title={'Amount pending'} orderCount={'13'} amount={'100,00.20'}></PriceCard>
                </div>
                <div className="flex-1">
                    <PProcessedCard title={'Amount pending'} amount={'100,00.20'}></PProcessedCard>
                </div>

            </div>

        </>
    )
}

export default App;