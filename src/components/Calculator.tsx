import React from "react";
import {useSelector} from "react-redux";
import OperatorButton from "@component/assets/OperatorButton";
import DigitButton from "@component/assets/DigitButton";

const Calculator = (): JSX.Element => {
    const currentValue = useSelector((state: any) => state.calculator.currentValue);
    const itemsInOperation = useSelector((state: any) => state.calculator.accumulatedValue);
    const currentOperator = useSelector((state: any) => state.calculator.operator);


    return <div className={"bg-black text-white p-2 w-[400px] text-2xl rounded-md"}>
        <div className={"text-right flex flex-col"}>
            <span className={"text-yellow-500 min-h-[32px]"}>{itemsInOperation}{currentOperator}</span>
            <span className="break-words">{currentValue ? currentValue : "0"}{}</span>
        </div>
        <div className={"grid grid-cols-4 grid-rows-5 gap-0.5"}>
            <DigitButton />
            <OperatorButton />
        </div>
    </div>
}

export default Calculator
