import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

function Link (props) {

    return (
        <div>
          
            <LINK  
            color={props.color}
            font_weight={props.font_weight}
            font_family={props.font_family}
            small_font_size={props.small_font_size}
            middle_font_size={props.middle_font_size}
            large_font_size={props.large_font_size}
            
            // color=""
            // font-weight=""
            // font-family=""
            // small_font_size=""
            // middle_font_size=""
            // large_font_size=""
            >
            {props.link}
            </LINK>
        </div>
        
    )
}

export default Link;

const LINK = styled.a `
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    font-size:${props => props.small_font_size|| "14px"};
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    font-size:${props => props.middle_font_size|| "16px"};

  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    font-size:${props => props.large_font_size || "18px"};
  `}
color: ${props => props.color || "black"};
font-weight: ${props => props.font_weight || "regular"};
font-family: ${props => props.font_family || "Baskerville,'Baskerville Old Face','Hoefler Text', Garamond,'New Roman',serif"};
`;