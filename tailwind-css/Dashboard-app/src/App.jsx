import { Button } from "./components/Button";
import MainCard from "./components/MainCard";
import PProcessedCard from "./components/PProcessedCard";
import PriceCard from "./components/PriceCard";
import SidePanal from "./components/SidePanal";
import TopBar from "./components/TopBar";

const App = () => {
    return (
        <>
            <div className="flex">
                <div className="relative">
                    <SidePanal></SidePanal>
                </div>
                <div className="w-full">
                    <div>
                        <TopBar></TopBar>
                    </div>
                    <div className="flex">
                        <div className="flex-1">
                            <MainCard title={'Next Payout'} orderCount={'13'} amount={'23,548.20'}></MainCard>
                        </div>
                        <div className="flex-1">
                            <PriceCard title={'Amount Pending'} orderCount={'13'} amount={'75,923.50'}></PriceCard>
                        </div>
                        <div className="flex-1">
                            <PProcessedCard title={'Amount Pocessed'} amount={'450,970.20'}></PProcessedCard>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default App;