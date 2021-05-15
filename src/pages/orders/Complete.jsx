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
import InputGroup from '../../components/groups/forms/InputGroup';
import TextAndNumberButton from '../../components/groups/buttons/TextAndNumberButton';
import { toast } from "react-toastify";
import Text from '../../components/parts/Text';
import { useSelector, useDispatch } from 'react-redux';
import {setSavedMenuItems} from '../../stores/actions/savedMenuItems';
import useSavedMenuItems from '../../constants/util/useSavedMenuItems';
import useSavedOrder from '../../constants/util/useSavedOrder';
//api
import {postEmail} from '../../stores/apis/orders/postEmail';
//input 
import useForm from '../../stores/reducers/util/useForm';
const initialStateForInput = {
    email: "",
    firstName: "",
    lastName: ""
};

function Complete () {
    useSavedMenuItems()
    useSavedOrder()
    const savedMenuItems = useSelector(state => state.savedMenuItems)
    const savedOrder = useSelector(state => state.savedOrder)
    const dispatch = useDispatch()
    const [formState, handleChange] = useForm(initialStateForInput);

    const menuItemList = !savedMenuItems  ||savedMenuItems.state == null  ? <div>Corrently There is no items in cart </div>
    :savedMenuItems.state.map((menuItem,key) =>
        <div>
            <CONTAINER>
                <ProductInfo text1={menuItem.menuName} text2={menuItem.price} src={Image} number={menuItem.orderAmount}/>
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
                </div>
             }
            bottom={
                <div>
                    <WRAPPER>
                        <Text text="Your Name:" text_align="left"/>
                        <Text text={savedOrder.state.name} text_align="left"/>
                    </WRAPPER>
                    <MARGIN/>
                    <InputGroup 
                    label="Put your email here If you want check your order details"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    />
                    <MARGIN/>
                    <TextButton
                    text="Send Email"
                    isCenter={true}/>
                </div>
            }
            />
            
        </div>
        
    )
}

export default Complete;

const CONTAINER = styled.div `

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

const WRAPPER = styled.div `

display:flex;
`