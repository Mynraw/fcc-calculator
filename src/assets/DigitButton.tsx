import React from "react";
import { getCurrentValue } from "@component/redux/calculatorSlice";
import { useDispatch } from "react-redux";
import { calculatorNums } from "@component/pages/api/items";

const DigitButton = () => {
  const dispatch = useDispatch();

  const handleOperation = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(getCurrentValue(e.currentTarget.name));
  };

  return (
    <>
      {calculatorNums.map((item: any) => (
        <button
          name={item.key}
          onClick={handleOperation}
          className={`p-2 border border-transparent hover:border-white hover:text-black ${item.twClass}`}
          key={item.key}
        >
          {item.key}
        </button>
      ))}
    </>
  );
};

export default DigitButton;
