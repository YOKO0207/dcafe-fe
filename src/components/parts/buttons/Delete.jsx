import React from 'react';
import styled from 'styled-components';
import Color from '../../../variables/styles/Color'
import media from "styled-media-query";


function Delete (props) {
    
    return (
        <div>
            <Button bgColor={props.bgColor}>button</Button>
        </div>
        
    )
}

export default Delete;

const Button = styled.button `
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    background: red;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    background: green;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    background: blue;
  `}
color:${Color.PRIMARY};
background: ${props => props.bgColor || "blue"};
`;