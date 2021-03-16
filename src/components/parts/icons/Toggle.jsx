import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import {Menu} from '@styled-icons/boxicons-regular/Menu';

function Toggle () {
    return (
        <div>
            <ICON/>
        </div>
        
    )
}

export default Toggle;

const ICON = styled(Menu)`
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:50px;
  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    
  `}
  color:white;
  width:40px;
`
