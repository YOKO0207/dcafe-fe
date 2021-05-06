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
import getSavedItems from '../../constants/util/getSavedItems';
import { useSelector, useDispatch } from 'react-redux';
import {setSavedMenuItems} from '../../stores/actions/savedMenuItems';

function Cart () {

    //const [savedMenuItems, setSavedMenuItems] = useState([])
    const savedMenuItems = useSelector(state => state.savedMenuItems)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        const getMenuItems = new Promise((resolve, reject) => { 
            let data = localStorage.getItem('menuItems') 
            let menuItems = JSON.parse(data);
            
            if (menuItems) {
                resolve(menuItems) 
                } else {
                reject('Failed') 
                }
            })
            getMenuItems.then((message) => { 
                //setSavedMenuItems(message)
                //console.log(message)
                dispatch(setSavedMenuItems({savedMenuItems:message}))
            }).catch((message) => { 
                console.log(message)
            })
        console.log(savedMenuItems)
    },[])

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
