import {useSelector} from "react-redux";
import {calculatorItems} from "@component/pages/api/items";

const Calculator = () => {
    const currentValue = useSelector((state: any) => state.calculator.firstValue);

    return <div className={"bg-black text-white p-2 w-[400px] text-2xl rounded-md"}>
        <div className={"text-right pt-2"}>
            <span>{currentValue}</span>
        </div>
        <div className={"grid grid-cols-4 grid-rows-5 gap-0.5"}>
            {calculatorItems.map((item: any) => (
                <button className={`p-2 border border-transparent ${item.twClass} hover:border-white hover:text-black`} key={item.key}>{item.key}</button>
            ))}
        </div>
    </div>
}

export default Calculator
