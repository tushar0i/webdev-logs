import { Button } from "./components/Button";
import PriceCard from "./components/PriceCard";

const App = () => {
    return(
        <>
        <div className="grid grid-cols-3">
        <PriceCard title={'Amount processed'} orderCount={'13'}  amount={'100,00.20'}></PriceCard>
        <PriceCard title={'Amount processed'} orderCount={'13'}  amount={'100,00.20'}></PriceCard>
        <PriceCard title={'Amount processed'} orderCount={'13'}  amount={'100,00.20'}></PriceCard>
        </div>
        </>
    )
}

export default App;