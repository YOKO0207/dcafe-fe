import React from 'react';
import {Instagram} from '@styled-icons/bootstrap/Instagram';
import styled from 'styled-components';
import media from "styled-media-query";

function InstagramIcon () {
    return (
        <div>
            <ICON/>
        </div>
        
    )
}

export default InstagramIcon;

const ICON = styled(Instagram)`
${media.lessThan("medium")`
/* screen width is between 768px (medium) and 1170px (large) */
width:30px;
`}
  width:36px;
  color:white;
`
