import React from 'react';
import Card from '../../parts/Card';
import Image from '../../parts/Image';
import Text from '../../parts/Text';
import styled from 'styled-components';

function Product (props) {

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
        <MARGIN/>,
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
            <Card card={listItems}
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

export default Product;

const WRAPPER=styled.div `
display:flex;
justify-content:space-between;
`
const MARGIN=styled.div `
width:100%;
height:5px;
`;
