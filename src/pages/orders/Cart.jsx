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
import useSavedMenuItems from '../../constants/util/useSavedMenuItems';
import { toast } from "react-toastify";

function Cart () {

    useSavedMenuItems()
    const savedMenuItems = useSelector(state => state.savedMenuItems)
    const dispatch = useDispatch()

    const handleDeleteMenuItem = (menuItemId) => {
        const array = JSON.parse(localStorage.getItem("menuItems"));
        for (var i = array.length - 1; i >= 0; i--) {
                if (array[i].menuItemId === menuItemId) {
                array.splice(i, 1);
                
                }
        }
        localStorage.setItem("menuItems", JSON.stringify(array));
        dispatch(setSavedMenuItems(array))
        toast("Items were removed from cart successfully")
    }

    const menuItemList = !savedMenuItems || savedMenuItems.state.length === 0  ? <div>Corrently There is no items in cart </div>
    :savedMenuItems.state.map((menuItem,key) =>
        <div>
            <CONTAINER>
                <CONTAINER>
                    {/* TODO counter won't work change it to square number temporary*/}
                    {/* <MARGIN_WRAPPER><IncrementDecrementButton/></MARGIN_WRAPPER> */}
                    <MARGIN_WRAPPER><SquareNumber square_number={menuItem.amount} color="black" border="1px solid black"/></MARGIN_WRAPPER>
                    <ProductWide text1={menuItem.menuName} text2={menuItem.price} src={Image}/>
                </CONTAINER>
                <DELETE onClick={()=>handleDeleteMenuItem(menuItem.menuItemId)}><DeleteIcon/></DELETE>
            </CONTAINER>
            <MARGIN/>
        </div>)
    
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

const DELETE = styled(MARGIN_WRAPPER) `
cursor:pointer;
`
