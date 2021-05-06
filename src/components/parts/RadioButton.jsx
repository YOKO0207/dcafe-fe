import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import {Field} from 'redux-form';


function RadioButton (props) {
    
    return (
        <div>
            <INPUT 
            type="radio"
            name={props.name}
            value={props.value}
            />
            <SPAN>{props.value}</SPAN>
        </div>
        
    )
}

export default RadioButton;

const INPUT = styled.input `
margin:0 5px;
`
const SPAN = styled.span `
font-size:16px;
`
