import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import MenuBar from '../../../components/groups/bars/MenuBar';
import ListLayout from '../../../components/layouts/ListLayout';
import Product from '../../../components/groups/cards/Product'
import Image from '../../../images/sample.png'

function Other () {
    const listItems = [
        <Product text1="Otherreeeeeeeee" text2="500" src={Image}/>,
        <Product text1="Cafe latte" text2="500" src={Image}/>,
        <Product text1="Cafe latte" text2="500" src={Image}/>,
        <Product text1="Cafe latte" text2="500" src={Image}/>,
        <Product text1="Cafe latte" text2="500" src={Image}/>,
        <Product text1="Cafe latte" text2="500" src={Image}/>,
        <Product text1="Cafe latte" text2="500" src={Image}/>,
        <Product text1="Cafe latte" text2="500" src={Image}/>,
        <Product text1="Cafe latte" text2="500" src={Image}/>,
        <Product text1="Cafe latte" text2="500" src={Image}/>
    ]
    return (
        <div>
            <div>
                <ListLayout
                top={<MenuBar/>}
                contents={listItems}
                />
            </div>
        </div>
        
    )
}

export default Other;
