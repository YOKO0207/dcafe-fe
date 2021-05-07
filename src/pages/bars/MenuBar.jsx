import React,{useState, useEffect, useReducer} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";
import LinkItem from '../../components/parts/Link';
import Cart from '../../components/parts/icons/Cart'
//api
import {fetchCategories} from '../../stores/apis/menus/categories'
//reducer
import {
  initialState,
  categoriesActionTypes,
  categoriesReducer
} from '../../stores/reducers/menus/categories';


function MenuBar (props) {
  
  const [state, dispatch] = useReducer(categoriesReducer, initialState);
    useEffect(() => {
        dispatch({ type: categoriesActionTypes.FETCHING });
        fetchCategories()
        .then((data) =>
            dispatch({
            type: categoriesActionTypes.FETCH_SUCCESS,
            payload: {
                categories: data
            }
            })
        )
        
    }, [])

    const categoryList = state.categoriesList.map((category,key) =>
    <div>
      <LISTITEM>
        <Link to={'/orders/menus/'+category.categoryId}>
          <LinkItem
          font-weight="bold"
          small_font_size="18px"
          middle_font_size="20px"
          large_font_size="22px"
          link={category.categoryName}
          />
        </Link>
      </LISTITEM>
    </div>
    ) 
    
    return (
        <div>
            <MENUBAR>
                <LIST>
                    <LISTITEM>
                      <Link to={'/orders/menus/all'}>
                        <LinkItem
                        font-weight="bold"
                        small_font_size="18px"
                        middle_font_size="20px"
                        large_font_size="22px"
                        link="top"
                        />
                      </Link>
                    </LISTITEM>
                    {categoryList}
                </LIST>
                <Link to={'/orders/cart'}>
                  <Cart/>
                </Link>
            </MENUBAR>
            
        </div>
        
    )
}

export default MenuBar;

const MENUBAR = styled.div `
color:black;
display:flex;
align-items:center;
justify-content:space-between;
border-bottom:1px solid black;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    height:55px ;
    padding:0 8px;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    height:70px ;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    height:85px ;
  `}
`;
const LIST = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`
const LISTITEM = styled.div`
margin:0 40px;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    margin:0 4px;
  `}
`


