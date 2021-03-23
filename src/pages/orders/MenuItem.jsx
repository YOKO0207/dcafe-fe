import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import MenuBar from '../../components/groups/bars/MenuBar';
import Product from '../../components/groups/cards/Product';
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';
import Image from '../../images/sample.png'

function MenuItem () {
    return (
        <div>
            {/* 死ぬほど途中3/23 */}
            <ThreeLayersLayout top={<MenuBar/>} middle={<Product text1="Cafe latte" text2="500" src={Image}/>}/>
        </div>
        
    )
}

export default MenuItem;
