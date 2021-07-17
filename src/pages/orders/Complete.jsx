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
import {useHistory} from 'react-router-dom'
//api
import {postOrder} from '../../stores/apis/orders/postOrder';
import {postEmail} from '../../stores/apis/orders/postEmail';

//input 
import useForm from '../../stores/reducers/util/useForm';
const initialStateForInput = {
    email: ""
};

function Complete () {
    useSavedMenuItems()
    useSavedOrder()
    const savedMenuItems = useSelector(state => state.savedMenuItems)
    const savedOrder = useSelector(state => state.savedOrder)
    const dispatch = useDispatch()
    const [formState, handleChange] = useForm(initialStateForInput);
    const history = useHistory()

    const handleSubmit = () => {
        let data = {
            name:savedOrder.state.name,
            comment:savedOrder.state.name,
            eatinTakeout:true,
            orderDetails:savedOrder.state.orderDetails,
            totalPrice:savedOrder.state.totalPrice
        }
        postOrder(data);
        localStorage.removeItem("menuItems");
        localStorage.removeItem("order");
        toast("Your Order has been sent successfully")
        history.push("/");
    }
    const handleSubmitWithEmail = () => {
        let data = {
            name:savedOrder.state.name,
            email:formState.email,
            comment:savedOrder.state.name,
            eatinTakeout:true,
            orderDetails:savedOrder.state.orderDetails,
            totalPrice:savedOrder.state.totalPrice
        }
        postOrder(data);
        postEmail(data);
        localStorage.removeItem("menuItems");
        localStorage.removeItem("order");
        toast("Your Order has been sent successfully");
        history.push("/");
    }

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
            bottom={savedOrder?
                <div>
                    <BOX>
                        <WRAPPER>
                            <TEXT><Text text="Your Name:" text_align="left"/></TEXT>
                            <Text text={savedOrder.state.name} text_align="left"/>
                        </WRAPPER>
                        {savedOrder.state.comment?
                        <WRAPPER>
                            <TEXT><Text text="Your Request:" text_align="left"/></TEXT>
                            <Text text={savedOrder.state.comment} text_align="left"/>
                        </WRAPPER>
                        :
                        <WRAPPER>
                            <TEXT><Text text="Your Request:" text_align="left"/></TEXT>
                            <Text text="No request" text_align="left"/>
                        </WRAPPER>
                        } 
                        <WRAPPER_NO_BORDER>
                            <TEXT><Text text="Total Price:" text_align="left"/></TEXT>
                            <Text text={savedOrder.state.totalPrice} text_align="left"/>
                        </WRAPPER_NO_BORDER>
                    </BOX>
                    <MARGIN/>
                    <InputGroup 
                    label="Put your email here If you want check your order details"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    />
                    <MARGIN/>
                    {formState.email?
                    <TextButton
                    text="Confirm Order"
                    isCenter={true}
                    onClick={handleSubmitWithEmail}/>
                    :
                    <TextButton
                    text="Confirm Order"
                    isCenter={true}
                    onClick={handleSubmit}/>
                    }
                </div>
                :<Text text="There is no confirmed items" text_align="left"/>}
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
margin-bottom:10px;
border-bottom:1px solid black;
padding-bottom:5px;
display:flex;
`
const BOX = styled.div `
border:1px solid black;
padding:10px 10px 0 10px;
`
const WRAPPER_NO_BORDER = styled(WRAPPER) `
border-bottom:unset;
padding-bottom:unset;`

const TEXT = styled.div `
margin-right:5px;`