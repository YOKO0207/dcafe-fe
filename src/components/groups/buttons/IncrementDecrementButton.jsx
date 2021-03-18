import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../../parts/Button';
import Minus from '../../parts/icons/Minus';
import Plus from '../../parts/icons/Plus';
import Text from '../../parts/Text';

// またprops渡すこと。ここでstateは持たない
function IncrementDecrementButton () {

    const [number, setNumber] = useState(0)

    function handleIncrease (){
        setNumber(number+1)
    }
    function handleDecrease (){
        setNumber(number-1)
    }
    

    return (
        <div>
            <CONTAINER>
                <Button onClick={handleIncrease} button={<Plus/>}/>
                <TEXT>
                    <Text 
                    text={number}
                    small_font_size="22px"
                    middle_font_size="25px"
                    large_font_size="32px"
                    />
                </TEXT>
                {number > 0 ?<Button onClick={handleDecrease} button={<Minus/>}/> : <Minus/>}
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