import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Text from '../../parts/Text';
import Card from '../../parts/Card';

function SquareNumber () {
    return (
        <div>
            <Card 
            border="1px solid white"
            padding="5px 10px"
            card={<Text color="white" large_font_size="25px" middle_font_size="22px" large_font_size="19px" text="0"/>}/>
        </div>
        
    )
}

export default SquareNumber;
