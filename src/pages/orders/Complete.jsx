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
import MenuBar from '../bars/MenuBar'
import TextButton from '../../components/groups/buttons/TextButton';
import ProductInfo from '../../components/groups/cards/ProductInfo';
import TextAndNumberButton from '../../components/groups/buttons/TextAndNumberButton';

function Complete () {
    return (
        <div>
            <ThreeLayersLayout
             top={<MenuBar/>}
             middle={
                <div>
                    <MARGIN/>
                    <ProductInfo/>
                </div>}
                bottom={
                    <div>
                        <MARGIN/>
                        <TextAndNumberButton
                        square_number="10"
                        text="Confirm order"
                        price="5000"
                        isCenter={true}/>
                    </div>
                }
            />
            
        </div>
        
    )
}

export default Complete;

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
