import React, {useState,useReducer,useEffect} from 'react';
import styled from 'styled-components';
import Button from '../../parts/Button';
import Minus from '../../parts/icons/Minus';
import Plus from '../../parts/icons/Plus';
import Text from '../../parts/Text';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, setDefault} from '../../../stores/actions/counter';
import counterReducer from '../../../stores/reducers/util/counter';

function IncrementDecrementButton () {
    
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDefault())
    }, [])

    return (
        <div>
            <CONTAINER>
                <Button onClick={() => dispatch(increment())} button={<Plus/>}/>
                <TEXT>
                    <Text 
                    text={counter}
                    small_font_size="22px"
                    middle_font_size="25px"
                    large_font_size="32px"
                    />
                </TEXT>
                {counter > 1 ?<Button onClick={() => dispatch(decrement())} button={<Minus/>}/> : <Minus/>}
            </CONTAINER>
        </div>
        
    )
}

export default IncrementDecrementButton;

const CONTAINER = styled.div`
display:flex;
align-items:center;`
const TEXT = styled.div`
margin:0 5px;`