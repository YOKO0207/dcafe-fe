import React,{useState, useEffect, useReducer} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import MenuBar from '../../../components/groups/bars/MenuBar';
import ListLayout from '../../../components/layouts/ListLayout';
import Product from '../../../components/groups/cards/Product'
import Image from '../../../images/sample.png'
//api
import {fetchMenuItems} from '../../../stores/apis/menuItems'
//reducer
import {
    initialState,
    menuItemsActionTypes,
    menuItemsReducer
} from '../../../stores/reducers/menuItems';

function All () {
    const [state, dispatch] = useReducer(menuItemsReducer, initialState);
    useEffect(() => {
        dispatch({ type: menuItemsActionTypes.FETCHING });
        fetchMenuItems()
        .then((data) =>
            dispatch({
            type: menuItemsActionTypes.FETCH_SUCCESS,
            payload: {
                menuItems: data
            }
            })
        )
        console.log(state.menuItemsList)
    }, [])

    const menuItemList = state.menuItemsList.map((menuItem,key) =>
    <div>
        <Product text1={menuItem.menuName} text2={menuItem.price} src={Image}/>
    </div>
    ) 
    return (
        <div>
            <ListLayout
            top={<MenuBar/>}
            contents={menuItemList}
            />
        </div>
        
    )
}

export default All;
