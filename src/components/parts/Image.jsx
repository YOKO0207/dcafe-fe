import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

function Image (props) {
    
    return (
        <div>
            <IMAGE 
            box_shadow={props.box_shadow}
            border_radius={props.border_radius}
            small_width={props.small_width}
            middle_width={props.middle_width}
            large_width={props.large_width}
            small_height={props.small_height}
            middle_height={props.middle_height}
            large_height={props.large_height}
            src={props.src}
            alt={props.alt}

            // box_shadow=""
            // border_radius=""
            // small_width=""
            // middle_width=""
            // large_width=""
            // small_height=""
            // middle_height=""
            // large_height=""
            // src={}
            // alt=""
            />
        </div>
        
    )
}

export default Image;

const IMAGE = styled.img `
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
    height: ${props => props.large_height || "10px"};
  `}
box_shadow: ${props => props.box_shadow || "black"};
border-radius:${props => props.border_radius|| "none"};

`;
