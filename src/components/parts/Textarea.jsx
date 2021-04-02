import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";


function Textarea (props) {
    
    return (
        <div>
            <TEXTAREA 
            color={props.color}
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
            small_font_size={props.small_font_size}
            middle_font_size={props.middle_font_size}
            large_font_size={props.large_font_size}

            placeholder={props.placeholder}
            type={props.type || "text"}
            />
        </div>
        
    )
}

export default Textarea;

const TEXTAREA = styled.textarea `
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width: ${props => props.small_width || "100%"};
    height: ${props => props.small_height || "100px"};
    font-size: ${props => props.small_font_size || "15px"};
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width: ${props => props.middle_width || "100%"};
    height: ${props => props.middle_height || "130px"};
    font-size: ${props => props.middle_font_size || "18px"};
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width: ${props => props.large_width || "100%"};
    height: ${props => props.large_height || "130px"};
    font-size: ${props => props.large_font_size || "20px"};
  `}
background: ${props => props.bg_color || "white"};
color: ${props => props.color || "black"};
border: ${props => props.border || "1px solid black"};
box-shadow: ${props => props.box_shadow || "none"};
border-radius:${props => props.border_radius|| "none"};
padding:5px;
`;
