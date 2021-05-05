import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import RadioButton from '../../parts/RadioButton';

function RadioButtonGroup (props) {
    const inputItems = props.children.map((input)=>{
        return (
        <div>
            <RadioButton 
            key={input} 
            type="radio"
            name={input.name}
            value={input.value}/>
            
        </div>)
    })
    return (
        <div>
            <CONTAINER>{inputItems}</CONTAINER>
        </div>
    )
}

export default RadioButtonGroup;
const CONTAINER = styled.div `
display:flex;
`
