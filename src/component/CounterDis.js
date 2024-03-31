import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Box from './Box';

const CounterDis = () => {

    const count = useSelector(state=>state.count)
    const dispatch = useDispatch();
    const id = useSelector(state=>state.id)
    const pw = useSelector(state=>state.pw)

    const plus =()=>{
        dispatch({type:"PLUS", payload:{num:5}})
    }

    const minus =()=>{
        dispatch({type:"MINUS", payload:{num:3}})
    }

    const login =()=>{
        dispatch({type:"LOGIN", payload:{id:"sunae", pw:"1234"}})
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <hr/>
            <br/>
            <Box />
            <hr/>
            <br/>
            <h1>{id}{pw}</h1>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default CounterDis;