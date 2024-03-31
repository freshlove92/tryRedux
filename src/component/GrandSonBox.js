import React from 'react';
import { useSelector } from 'react-redux';


const GrandSonBox = () => {

    const count = useSelector(state=>state.count)


    return (
        <div>
            그랜드 썬 박스에서도 보여줘봐~ 
            {count}
        </div>
    );
};

export default GrandSonBox;