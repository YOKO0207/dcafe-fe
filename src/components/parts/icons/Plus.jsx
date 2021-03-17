import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import {PlusCircle} from '@styled-icons/boxicons-regular/PlusCircle'

function Plus () {
    return (
        <div>
            <ICON/>
        </div>
        
    )
}

export default Plus;

const ICON = styled(PlusCircle)`
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:25px;
  `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:27px;
  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:30px;
  `}
color:#484848;
`
