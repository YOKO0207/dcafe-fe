import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import {MinusCircle} from '@styled-icons/boxicons-regular/MinusCircle'

function Minus () {
    return (
        <div>
            <ICON/>
        </div>
        
    )
}

export default Minus;

const ICON = styled(MinusCircle)`
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
