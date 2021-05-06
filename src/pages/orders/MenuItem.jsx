import React,{useState, useEffect, useReducer} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import MenuBar from '../bars/MenuBar';
import Product from '../../components/groups/cards/Product';
import ThreeLayersLayout from '../../components/layouts/ThreeLayersLayout';
import Card from '../../components/parts/Card';
import Text from '../../components/parts/Text';
import Image from '../../images/sample.png';
import Textarea from '../../components/parts/Textarea';
import Label from '../../components/parts/Label';
import IncrementDecrementButton from '../../components/groups/buttons/IncrementDecrementButton';
import TextAndNumberButton from '../../components/groups/buttons/TextAndNumberButton';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";

//api
import {fetchMenuItem} from '../../stores/apis/menus/menuItem'

//reducer
import {
  initialState,
  menuItemActionTypes,
  menuItemReducer
} from '../../stores/reducers/menus/menuItem';
import RadioButtonGroup from '../../components/groups/forms/RadioButtonGroup';

function MenuItem (props) {

  const counter = useSelector(state => state.counter)
  const [state, dispatch] = useReducer(menuItemReducer, initialState);
  
    useEffect(() => {
        dispatch({ type: menuItemActionTypes.FETCHING });
        fetchMenuItem(props.match.params.menuItemId)
        .then((data) =>
            dispatch({
            type: menuItemActionTypes.FETCH_SUCCESS,
            payload: {
                menuItem: data
            }
            })
        )
        
    }, [])
    const handleSetOrderDetails = () => {
      const menuItems = JSON.parse(localStorage.menuItems || '[]');
      menuItems.push({menuItemId:state.menuItem.menuItemId, amount:counter, size:"grande"});
      localStorage.menuItems = JSON.stringify(menuItems);
      //localStorage.setItem(menuItems);
      toast("Items were added to cart successfully")
    }

    return (
        <div>
            <ThreeLayersLayout top={<MenuBar/>} 
            middle={<div>
                <MIDDLE_MARGIN/>
                <CONTAINER>
                    <Product text1={state.menuItem.menuName} text2={state.menuItem.price} src={Image}/>
                    <Card padding="0 10px"
                    card={<div>
                    <Text text={state.menuItem.menuName} large_font_size="30px" middle_font_size="25px" small_font_size="20px" text_align="left"/>
                    <Text text={state.menuItem.description}
                    text_align="left"/>
                    </div>}/>
                </CONTAINER>
                <SMALL_MARGIN/>
                <RadioButtonGroup children={[{value:"small",  name:"size"},{value:"middle",  name:"size"},{value:"grande",  name:"size"}]}/>
                <MIDDLE_MARGIN/>
                <CONTAINER_BOTTOM>
                    <IncrementDecrementButton/>
                    <TextAndNumberButton text={"Add "+`${counter}`+" to cart"} price={"$"+`${state.menuItem.price*counter}`} display="none" onClick={handleSetOrderDetails}/>
                </CONTAINER_BOTTOM>
                </div>}/>
        </div>
        
    )
}

export default MenuItem;

const CONTAINER=styled.div `
display:flex;
`
const TEXTAREA = styled.div `
width:100%;
`
const CONTAINER_BOTTOM = styled.div `
display:flex;
align-items:center;
justify-content:space-around;
max-width:320px;
margin:0 auto;
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    max-width:450px;
    margin:0 auto;
  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    max-width:500px;
    margin:0 auto;
  `}
`

const SMALL_MARGIN = styled.div `
width:100%;
height:5px;
`
const MIDDLE_MARGIN = styled(SMALL_MARGIN) `
height:20px;
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    height:25px
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    height:30px;
  `}
`
