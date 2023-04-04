import React from "react";
import {getOperation, resetValues, getCurrentValue, nullDigit} from "@component/redux/calculatorSlice";
import {useDispatch, useSelector} from "react-redux";
import {calculatorOperators} from "@component/pages/api/items";


const OperatorButton = () => {
    const dispatch = useDispatch();
    const currentOperator = useSelector((state: any) => state.calculator.operator);
    const currentValue = useSelector((state: any) => state.calculator.currentValue);
    const accumulatedValue = useSelector((state: any) => state.calculator.accumulatedValue);

    const handleOperation = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(getOperation(e.currentTarget.name));
        switch (e.currentTarget.name) {
            case 'AC':
                dispatch(resetValues());
                break;
            case '.':
                if (!currentOperator || !currentValue.indexOf(".")) {
                    dispatch(getCurrentValue(0 + e.currentTarget.name));
                }
                break;
            case '/':
            case 'x':
            case '-':
            case '+':
                dispatch(getOperation(e.currentTarget.name));
                break;
            case '=':
                evaluate();
                break;
            default:
                break;
        }
    }

    const evaluate = () => {
        switch (currentOperator) {
            case '/':
               dispatch(getCurrentValue( Number(accumulatedValue) / Number(currentValue)));
                break;
            case 'x':
                dispatch(getCurrentValue( Number(accumulatedValue) * Number(currentValue)));
                break;
            case '+':
                dispatch(getCurrentValue( Number(accumulatedValue) + Number(currentValue)));
                break;
            case '-':
                dispatch(getCurrentValue( Number(accumulatedValue) - Number(currentValue)));
                break;
            default:
               if (!currentValue || !accumulatedValue) {
                   dispatch(getCurrentValue(NaN));
                   dispatch(nullDigit(NaN));
               }
                break;
        }
    }

    return <>
        {calculatorOperators.map((item: any) => (
            <button
                name={item.key}
                onClick={handleOperation}
                className={`p-2 border border-transparent hover:border-white hover:text-black ${item.twClass}`}
                key={item.key}>{item.key}</button>
        ))}
    </>
}

export default OperatorButton
