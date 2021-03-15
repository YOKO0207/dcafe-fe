import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";


function Card (props) {
    
    return (
        <div>
            <CARD 
            bg_color={props.bg_color}
            border={props.border}
            box_shadow={props.box_shadow}
            border_radius={props.border_radius}
            small_width={props.small_width}
            middle_width={props.middle_width}
            large_width={props.large_width}
            small_height={props.small_height}
            middle_height={props.middle_height}
            large_height={props.large_height}
            
            // bg_color=""
            // border=""
            // box_shadow=""
            // border_radius=""
            // small_width=""
            // middle_width=""
            // large_width=""
            // small_height=""
            // middle_height=""
            // large_height=""
            >
            {props.card}
            </CARD>
        </div>
        
    )
}

export default Card;

const CARD = styled.div `
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: ${props => props.small_width || "10px"};
    height: ${props => props.small_height || "10px"};
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width: ${props => props.middle_width || "10px"};
    height: ${props => props.middle_height || "10px"};
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width: ${props => props.large_width || "10px"};
    height: ${props => props.large_width || "10px"};
  `}
background: ${props => props.bg_color || "black"};
border: ${props => props.border || "none"};
box-shadow: ${props => props.box_shadow || "none"};
border-radius:${props => props.border_radius|| "none"};
`;
