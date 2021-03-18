import React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import Facebook from '../../parts/icons/Facebook'
import Instagram from '../../parts/icons/InstagramIcon'

function SNSIcons () {
    return (
        <div>
            <SNSICONS>
                <ICON><Facebook/></ICON>
                <ICON><Instagram/></ICON>
            </SNSICONS>
        </div>
    )
}

export default SNSIcons;

const SNSICONS = styled.div`
display:flex;
align-items:center;
`
const ICON = styled.div`
margin: 0 6px;`
