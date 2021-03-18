import React from 'react';
import {FacebookCircle} from '@styled-icons/boxicons-logos/FacebookCircle';
import styled from 'styled-components';
import media from "styled-media-query";

function Facebook () {
    return (
        <div>
            <ICON/>
        </div>
        
    )
}

export default Facebook;

const ICON = styled(FacebookCircle)`
  ${media.lessThan("medium")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:35px;
  `}
  color:white;
  width:40px;
`


