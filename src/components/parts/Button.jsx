import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";


function Button (props) {
    
    return (
        <div>
            <BUTTON 
            bg_color={props.bg_color}
            small_width={props.small_width}
            middle_width={props.middle_width}
            large_width={props.large_width}
            small_height={props.small_height}
            middle_height={props.middle_height}
            large_height={props.large_height}
            // bg_color=""
            // small_width=""
            // middle_width=""
            // large_width=""
            // small_height=""
            // middle_height=""
            // large_height=""
            >
              {props.button}
            </BUTTON>
        </div>
        
    )
}

export default Button;

const BUTTON = styled.button `
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
`;
