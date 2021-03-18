import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import {Cart} from '@styled-icons/boxicons-solid/Cart';

function CartIcon () {
    return (
        <div>
            <ICON/>
        </div>
        
    )
}

export default CartIcon;

const ICON = styled(Cart)`
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:40px;
  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:50px;
  `}
  width:30px;
`
