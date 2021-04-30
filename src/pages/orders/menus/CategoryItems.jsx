import React,{useState, useEffect, useReducer} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import MenuBar from '../../bars/MenuBar';
import ListLayout from '../../../components/layouts/ListLayout';
import Product from '../../../components/groups/cards/Product'
import Image from '../../../images/sample.png'
//api
import {fetchCategoryItems} from '../../../stores/apis/menus/categoryItems'
//reducer
import {
    initialState,
    menuItemsActionTypes,
    menuItemsReducer
} from '../../../stores/reducers/menus/menuItems';

function CategoryItems (props) {
    const [state, dispatch] = useReducer(menuItemsReducer, initialState);
    useEffect(() => {
        dispatch({ type: menuItemsActionTypes.FETCHING });
        fetchCategoryItems(props.match.params.categoryId)
        .then((data) =>
            dispatch({
            type: menuItemsActionTypes.FETCH_SUCCESS,
            payload: {
                menuItems: data
            }
            })
        )
        
    }, [props.match.params.categoryId])


    const menuItemList = state.menuItemsList.map((menuItem,key) =>
    <div>
        <Link to={'/orders/menu_item/'+menuItem.menuItemId}>
            <Product text1={menuItem.menuName} text2={menuItem.price} src={Image}/>
        </Link>
    </div>
    ) 
    return (
        <div>
            <div>
                <ListLayout
                top={<MenuBar/>}
                contents={menuItemList}
                />
            </div>
        </div>
        
    )
}

export default CategoryItems;
