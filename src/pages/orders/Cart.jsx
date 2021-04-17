import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';
import Image from '../../images/sample.png';
import Textarea from '../../components/parts/Textarea';
import Label from '../../components/parts/Label';
import IncrementDecrementButton from '../../components/groups/buttons/IncrementDecrementButton';
import ProductWide from '../../components/groups/cards/ProductWide';
import DeleteIcon from '../../components/parts/icons/DeleteIcon';
import MenuBar from '../../components/groups/bars/MenuBar'
import TextButton from '../../components/groups/buttons/TextButton';
import TextareaGroup from '../../components/groups/forms/TextareaGroup';

function Cart () {
    return (
        <div>
            <ThreeLayersLayout
             top={<MenuBar/>}
             middle={
                <div>
                    <MARGIN/>
                    <CONTAINER>
                        <CONTAINER>
                            <MARGIN_WRAPPER><IncrementDecrementButton/></MARGIN_WRAPPER>
                            <ProductWide text1="Cafe latte" text2="500" src={Image}/>
                        </CONTAINER>
                        <MARGIN_WRAPPER><DeleteIcon/></MARGIN_WRAPPER>
                    </CONTAINER>
                    
                </div>}
                bottom={
                    <div>
                        <MARGIN/>
                        <TextareaGroup label="Add request"/>
                        <MARGIN/>
                        <TextButton text="Confirm Order" isCenter={true}/>
                    </div>
                }
            />
        </div>
    )
}

export default Cart;

const CONTAINER = styled.div `
display:flex;
align-items:center;
justify-content:space-between;
`

const MARGIN_WRAPPER = styled.div `
margin:0 20px; 
`

const MARGIN = styled.div `
width:100%;
height:30px;`

const MARGIN_SMALL = styled.div `
width:100%;
height:10px;`
