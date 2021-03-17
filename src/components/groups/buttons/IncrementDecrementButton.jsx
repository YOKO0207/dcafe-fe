import React, {useState} from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Button from '../../parts/Button';
import Minus from '../../parts/icons/Minus';
import Plus from '../../parts/icons/Plus';
import Text from '../../parts/Text';

function IncrementDecrementButton () {

    const [number, setNumber] = useState(0)
    return (
        <div>
            <CONTAINER>
                <button onClick={()=>setNumber(number+1)}><Plus/></button>
                <TEXT>
                    <Text 
                    text={number}
                    small_font_size="22px"
                    middle_font_size="25px"
                    large_font_size="32px"/>
                </TEXT>
                {number > 0 ? <button onClick={()=>setNumber(number-1)}><Minus/></button> : <Minus/>}
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