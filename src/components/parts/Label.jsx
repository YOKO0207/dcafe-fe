import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

function Label (props) {

    return (
        <div>
            <LABEL  
            color={props.color}
            font_weight={props.font_weight}
            font_family={props.font_family}
            small_font_size={props.small_font_size}
            middle_font_size={props.middle_font_size}
            large_font_size={props.large_font_size}
            >
            {props.label}
            </LABEL>
        </div>
        
    )
}

export default Label;

const LABEL = styled.label `
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    font-size:${props => props.small_font_size|| "15px"};
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    font-size:${props => props.middle_font_size|| "18px"};

  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    font-size:${props => props.large_font_size || "20px"};
  `}
color: ${props => props.color || "black"};
font-weight: ${props => props.font_weight || "regular"};
font-family: ${props => props.font_family || "Baskerville,'Baskerville Old Face','Hoefler Text', Garamond,'New Roman',serif"};
`;