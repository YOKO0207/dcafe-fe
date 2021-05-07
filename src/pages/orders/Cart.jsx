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
import TextareaGroup from '../../components/groups/forms/TextareaGroup';
import { useSelector, useDispatch } from 'react-redux';
import {setSavedMenuItems} from '../../stores/actions/savedMenuItems';
import SquareNumber from '../../components/groups/cards/SquareNumber';
import useSavedMenuItems from '../../constants/util/useSavedMenuItems'

function Cart () {

    const savedMenuItems = useSelector(state => state.savedMenuItems)
    useSavedMenuItems()
    // const dispatch = useDispatch()
    
    // const asyncLocalStorage = {
    //     getItem: async function (key) {
    //         await null;
    //         return localStorage.getItem(key);
    //     }
    // };
    
    // useEffect(()=>{
        // asyncLocalStorage.getItem('menuItems').then(function (value) {
        //     let menuItems = JSON.parse(value);
        //     return menuItems
        // }).then(function(value){
        //     dispatch(setSavedMenuItems(value))
        // });
        //useSavedItems()
    // },[])

    const menuItemList = savedMenuItems?savedMenuItems.state.map((menuItem,key) =>
    <div>
        {/* <CONTAINER>
            <CONTAINER>
                <ProductWide text1={menuItem.menuName} text2={menuItem.price} src={Image}/>
            </CONTAINER>
        </CONTAINER> */}
        <CONTAINER>
            <CONTAINER>
                {/* TODO counter won't work change it to square number temporary*/}
                {/* <MARGIN_WRAPPER><IncrementDecrementButton/></MARGIN_WRAPPER> */}
                <MARGIN_WRAPPER><SquareNumber square_number={menuItem.amount} color="black" border="1px solid black"/></MARGIN_WRAPPER>
                <ProductWide text1={menuItem.menuName} text2={menuItem.price} src={Image}/>
            </CONTAINER>
            <MARGIN_WRAPPER><DeleteIcon/></MARGIN_WRAPPER>
        </CONTAINER>
        <MARGIN/>
    </div>):
    <div>There is no items in cart corrently</div>
    
    return (
        <div>
            <ThreeLayersLayout
             top={<MenuBar/>}
             middle={
                <div>
                    <MARGIN/>
                    {menuItemList}
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
