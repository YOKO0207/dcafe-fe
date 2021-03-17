import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Text from '../../parts/Text';
import Card from '../../parts/Card';
import Button from '../../parts/Button';
import SquareNumber from '../cards/SquareNumber';

function TextAndNumberButton () {

    const listItems = [
        <SquareNumber/>,
        <Text color="white" large_font_size="27px" middle_font_size="22px" small_font_size="19px" text="Confirm order"/>,
        <Text color="white" large_font_size="27px" middle_font_size="22px" small_font_size="19px" text="¥0000"/>,
    ]
    return (
        <div>
            <Button 
            bg_color="black"
            small_width="300px"
            middle_width="350px"
            large_width="400px"
            small_height="50px"
            middle_height="66px"
            large_height="80px"
            button= {listItems}
            // {<Text color="white" large_font_size="27px" middle_font_size="22px" small_font_size="19px" text="Confirm order 000"/>}
            />
        </div>
        
    )
}

export default TextAndNumberButton;
