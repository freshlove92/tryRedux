import React from 'react';
import { useSelector } from 'react-redux';
import GrandSonBox from './GrandSonBox';

const Box = () => {

    const count = useSelector(state=>state.count)

    return (
        <div>
            숫자가 같이 변하는지 볼까요~?
            <h1>{count}</h1>
            <GrandSonBox />
        </div>
    );
};

export default Box;