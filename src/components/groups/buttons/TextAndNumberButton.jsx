import React from 'react';
import Text from '../../parts/Text';
import Button from '../../parts/Button';
import SquareNumber from '../cards/SquareNumber';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

function TextAndNumberButton (props) {
    const counter = useSelector(state => state.counter)

    const listItems = [
        <SQUARENUMBER display={props.display}><SquareNumber square_number={props.square_number} color="white" border="1px solid white"/></SQUARENUMBER>,
        <Text color="white" large_font_size="27px" middle_font_size="22px" small_font_size="19px" text={props.text}/>,
        <Text color="white" large_font_size="27px" middle_font_size="22px" small_font_size="19px" text={props.price}/>,
    ]
    return (
        <div>
            <Button 
            isCenter={props.isCenter}
            bg_color="black"
            small_width="unset"
            middle_width="350px"
            large_width="380px"
            small_height="50px"
            middle_height="55px"
            large_height="60px"
            padding="15px"
            button= {listItems}
            onClick={props.onClick}
            />
        </div>
        
    )
}

export default TextAndNumberButton;

const SQUARENUMBER = styled.div `
display:${props => props.display||"block"};
`


