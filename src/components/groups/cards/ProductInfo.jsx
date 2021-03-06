import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import ProductWide from './ProductWide';
import SquareNumber from './SquareNumber';
import Image from '../../../images/sample.png'
import IncrementDecrementButton from '../buttons/IncrementDecrementButton';
import DeleteIcon from '../../parts/icons/DeleteIcon';


function ProductInfo (props) {
    return (
        <div>
            <CONTAINER>
                    <MARGIN_WRAPPER><SquareNumber square_number={props.number} border="1px solid black" color="black"/></MARGIN_WRAPPER>
                    <MARGIN_WRAPPER><ProductWide text1={props.text1} text2={props.text2} src={Image}/></MARGIN_WRAPPER>
            </CONTAINER>
        </div>
        
    )
}

export default ProductInfo;

const CONTAINER = styled.div `
display:flex;
align-items:center;
`

const MARGIN_WRAPPER = styled.div `
margin:0 20px; 
`