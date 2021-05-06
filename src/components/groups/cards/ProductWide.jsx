import React,{useState, useEffect, useReducer} from 'react';
import Card from '../../parts/Card';
import Image from '../../parts/Image';
import Text from '../../parts/Text';
import styled from 'styled-components';
//api
import {fetchMenuItem} from '../../../stores/apis/menus/menuItem';
//reducer
import {
    initialState,
    menuItemActionTypes,
    menuItemReducer
  } from '../../../stores/reducers/menus/menuItem';
import { useSelector, useDispatch } from 'react-redux';
  

function ProductWide (props) {
    const [state, dispatch] = useReducer(menuItemReducer, initialState);
    const counter = useSelector(state => state.counter)

    useEffect(() => {
        dispatch({ type: menuItemActionTypes.FETCHING });
        fetchMenuItem(1)
        .then((data) =>
            dispatch({
            type: menuItemActionTypes.FETCH_SUCCESS,
            payload: {
                menuItem: data
            }
            })
        )
        
    }, [])

    const listItems = [
        <Image 
        src={props.src}
        alt={props.alt}
        small_width={props.image_small_width}
        middle_width={props.image_middle_width}
        large_height="230px"
        large_width="230px"
        middle_width="200px"
        middle_height="200px"
        small_width="130px"
        small_height="130px"
        />,
        <WRAPPER>
            <Text 
            text={props.text1} 
            text_align="left"
            word_breack="break-all"
            />
            <Text 
            text={props.text2} 
            />
        </WRAPPER>
    ]
    return (
        <div>
            <Card small_width="90%"
            middle_width="90%"
            large_width="90%"
            card={
                <div>
                    <WRAPPER>
                    <Image 
                    src={props.src}
                    alt={props.alt}
                    small_width={props.image_small_width}
                    middle_width={props.image_middle_width}
                    large_height="130px"
                    large_width="130px"
                    middle_width="100px"
                    middle_height="100px"
                    small_width="90px"
                    small_height="90px"
                    />
                    <div>
                        <TEXT>
                        <Text 
                        text={state.menuItem.menuName}
                        word_breack="break-all"
                        />
                        <BOTTOM_TEXT>
                            <Text 
                            text={state.menuItem.price}
                            />
                        </BOTTOM_TEXT>
                        </TEXT>
                    </div>
                    </WRAPPER>
                </div>
            }
            background={props.background}
            border={props.border}
            box_shadow={props.box_shadow}
            border_radius={props.border_radius}
            small_width={props.small_width}
            middle_width={props.middle_width}
            large_width={props.large_width}
            small_height={props.small_height}
            middle_height={props.middle_height}
            large_height={props.large_height}
            padding={props.padding}
            display={props.display}
            />
        </div>
        
    )
}

export default ProductWide;

const WRAPPER=styled.div `
display:flex;
justify-content:space-between;
position:relative;
`
const MARGIN=styled.div `
width:100%;
height:5px;
`;

const BOTTOM_TEXT = styled.div `
position:absolute;
bottom:0;

`

const TEXT = styled.div `
padding-left:10px;
`
