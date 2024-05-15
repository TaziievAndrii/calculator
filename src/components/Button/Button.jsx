import React from 'react';
import { useDispatch } from 'react-redux';

import { input, clear, calculate, backspace } from '../../reducers/calculatorReducers';

export const Button = ({ value }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        const actions = {
            'C': clear,
            '=': calculate,
            'Backspace': backspace,
            default: () => input(value)
        };

        const action = actions[value] || actions.default;
        dispatch(action());
    };

    return <button className={`calculator__button`} onClick={handleClick}>{value}</button>;
};

export default Button
