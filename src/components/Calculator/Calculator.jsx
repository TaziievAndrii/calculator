import React from 'react';
import {useSelector} from "react-redux";

import {buttons} from "../../utils/buttons";

import Button from "../Button/Button";

const Calculator = () => {

    const inputText = useSelector((state) => state.calculator.input);
    const result = useSelector((state) => state.calculator.result);

    return (
        <div className={`container-calculator`}>
            <input type="text" value={inputText} readOnly />
            <div className="buttons__block">
                {buttons.map((row, rowIndex) => (
                    <div className="buttons__row" key={rowIndex}>
                        {row.map((button, colIndex) => (
                            <Button key={colIndex} value={button} />
                        ))}
                    </div>
                ))}
            </div>

            <div className={`result`}>Result: {result}</div>
        </div>
    );
};

export default Calculator;
