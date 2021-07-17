import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import media from "styled-media-query";
// import Textarea from '../../components/parts/Textarea';
// import Label from '../../components/parts/Label';
// import IncrementDecrementButton from '../../components/groups/buttons/IncrementDecrementButton';
// import SquareNumber from '../../components/groups/cards/SquareNumber';
import styled from 'styled-components';
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';
import Image from '../../images/sample.png';
import ProductWide from '../../components/groups/cards/ProductWide';
import DeleteIcon from '../../components/parts/icons/DeleteIcon';
import MenuBar from '../bars/MenuBar'
import TextButton from '../../components/groups/buttons/TextButton';
import TextareaGroup from '../../components/groups/forms/TextareaGroup';
import InputGroup from '../../components/groups/forms/InputGroup';
import Plus from '../../components/parts/icons/Plus';
import Minus from '../../components/parts/icons/Minus';
import Text from '../../components/parts/Text';
import { useSelector, useDispatch } from 'react-redux';
import {setSavedMenuItems} from '../../stores/actions/savedMenuItems';
import useSavedMenuItems from '../../constants/util/useSavedMenuItems';
import { toast } from "react-toastify";
import {useHistory} from 'react-router-dom'
//api
import {postOrder} from '../../stores/apis/orders/postOrder';
//input 
import useForm from '../../stores/reducers/util/useForm';
const initialStateForInput = {
    comment: "",
    firstName: "",
    lastName: ""
};

function Cart () {

    useSavedMenuItems()
    const savedMenuItems = useSelector(state => state.savedMenuItems)
    const dispatch = useDispatch()
    const [counter, setCounter] = useState(1)
    const [formState, handleChange] = useForm(initialStateForInput);
    const history = useHistory()

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
    const handleIncrement = (menuItem) => {
        const array = JSON.parse(localStorage.getItem("menuItems"));
        for (var i = array.length - 1; i >= 0; i--) {
                if (array[i].menuItemId === menuItem.menuItemId) {
                array.splice(i, 1);
                }
        }
        array.push({menuItemId:menuItem.menuItemId, orderAmount:menuItem.orderAmount+1, size:"grande",menuName:menuItem.menuName,price:menuItem.price});
        localStorage.setItem("menuItems", JSON.stringify(array));
        dispatch(setSavedMenuItems(array))
        toast("Items were changed successfully")
    }
    const handleDecrement = (menuItem) => {
        const array = JSON.parse(localStorage.getItem("menuItems"));
        for (var i = array.length - 1; i >= 0; i--) {
                if (array[i].menuItemId === menuItem.menuItemId) {
                array.splice(i, 1);
                }
        }
        array.push({menuItemId:menuItem.menuItemId, orderAmount:menuItem.orderAmount-1, size:"grande",menuName:menuItem.menuName,price:menuItem.price});
        localStorage.setItem("menuItems", JSON.stringify(array));
        dispatch(setSavedMenuItems(array))
        toast("Items were changed successfully")
    }

    function getTotalPrice () {
        let totalPrice = 0;
        const array = JSON.parse(localStorage.getItem("menuItems"));
        for (var i= array.length -1; i >= 0; i--){
            totalPrice+= array[i].price*array[i].orderAmount
        }
        return totalPrice;
    }

    const handleSubmit = () => {
        const array = JSON.parse(localStorage.getItem("menuItems"));
        const totalPrice = getTotalPrice();
        let data = {
            name:formState.firstName+' '+formState.lastName,
            comment:formState.comment,
            eatinTakeout:true,
            orderDetails:array,
            totalPrice:totalPrice
        }
        const order = JSON.parse(localStorage.order || '[]');
        localStorage.order = JSON.stringify(data);
        history.push("/orders/complete");
    }

    // TODO it won't work from time to time
    // || savedMenuItems.state.length === 0
    const menuItemList = !savedMenuItems  ||savedMenuItems.state == null  ? <div>Corrently There is no items in cart </div>
    :savedMenuItems.state.map((menuItem,key) =>
        <div>
            <CONTAINER>
                <CONTAINER>
                    <WRAPPER>
                        <POINTER onClick={()=>handleIncrement(menuItem)}><Plus/></POINTER>
                        <TEXT>
                            <Text 
                            text={menuItem.orderAmount}
                            small_font_size="22px"
                            middle_font_size="25px"
                            large_font_size="32px"
                            />
                        </TEXT>
                        {menuItem.orderAmount>1 ? <POINTER onClick={()=>handleDecrement(menuItem)}><Minus/></POINTER>:<Minus/>}
                    </WRAPPER>
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
                        <TextareaGroup label="Add request"
                        name="comment"
                        value={formState.comment}
                        onChange={handleChange}
                        />
                        <MARGIN/>
                        <INPUT_WRAPPER>
                            <InputGroup label="First Name(required)"
                            name="firstName"
                            value={formState.firstName}
                            onChange={handleChange}
                            />
                            <MARGIN_SMALL/>
                            <InputGroup label="Last Name(required)"
                            name="lastName"
                            value={formState.lastName}
                            onChange={handleChange}
                            />
                        </INPUT_WRAPPER>
                        <MARGIN/>
                        {formState.lastName && formState.lastName?
                        <TextButton text="Check order details" isCenter={true} onClick={handleSubmit}/>
                        :<TextButton text="Check order details" isCenter={true} bgColor="gray" cursor="not-allowed"/>}
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

const WRAPPER = styled.div `
margin:0 20px; 
display:flex;
`

const MARGIN = styled.div `
width:100%;
height:30px;`

const MARGIN_SMALL = styled.div `
width:100%;
height:10px;`

const DELETE = styled.div `
cursor:pointer;
margin:0 20px;
`
const TEXT = styled.div`
margin:0 5px;`

const POINTER = styled.div `
cursor:pointer;`

const INPUT_WRAPPER = styled.div `

`
