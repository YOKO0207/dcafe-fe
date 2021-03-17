import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Text from '../../parts/Text';
import Card from '../../parts/Card';

function SquareNumber () {
    return (
        <div>
            <Card 
            bg_color="white"
            border="1px solid black"
            small_width="17px"
            middle_width="22px"
            large_width="40px"
            small_height="22px"
            middle_height="29px"
            large_height="47px"
            card={<Text large_font_size="25px" middle_font_size="22px" large_font_size="19px" text="0"/>}/>
        </div>
        
    )
}

export default SquareNumber;
