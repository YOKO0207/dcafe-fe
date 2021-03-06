import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";


function Card (props) {

  const card = [props.card]
    
    return (
        <div>
            <CARD 
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
            // padding=""
            // display=""
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
    width: ${props => props.small_width};
    height: ${props => props.small_height };
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width: ${props => props.middle_width };
    height: ${props => props.middle_height};
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width: ${props => props.large_width };
    height: ${props => props.large_width };
  `}
background: ${props => props.background};
border: ${props => props.border || "none"};
box-shadow: ${props => props.box_shadow || "none"};
border-radius:${props => props.border_radius|| "none"};
padding: ${props => props.padding || "unset"};
display:${props=>props.display||"inline-block"};
`;
