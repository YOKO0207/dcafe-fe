import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";


function Button (props) {

  const button = [props.button]

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
            onClick={props.onClick}
            // bg_color=""
            // small_width=""
            // middle_width=""
            // large_width=""
            // small_height=""
            // middle_height=""
            // large_height=""
            >
            {button}
            </BUTTON>
        </div>
        
    )
}

export default Button;

const BUTTON = styled.button `
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: ${props => props.small_width};
    height: ${props => props.small_height};
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width: ${props => props.middle_width};
    height: ${props => props.middle_height};
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width: ${props => props.large_width };
    height: ${props => props.large_height};
  `}
background: ${props => props.bg_color};
display:flex;
align-items:center;
justify-content:space-around;
`;
