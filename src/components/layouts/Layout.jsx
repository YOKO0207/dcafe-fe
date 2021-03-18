import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";

function Layout (props) {
    return (
        <div>
            <TOP>{props.top}</TOP>
            <MIDDLE>
                <MIDDLERIGHT>{props.middle_right}</MIDDLERIGHT>
                <MIDDLEMIDDLE>{props.middle_middle}</MIDDLEMIDDLE>
                <MIDDLELEFT>{props.middle_left}</MIDDLELEFT>
                <MIDDLERIGHT>{props.middle_right}</MIDDLERIGHT>
            </MIDDLE>

        </div>
        
    )
}

export default Layout;

const TOP = styled.div`
width:100%;
height:auto;
`
const MIDDLE = styled.div`
margin: 0 auto;
display:-webkit-box;
display:-moz-box;
display:-ms-flexbox;
display:-webkit-flex;
display:-moz-flex;
display:flex;
-webkit-box-lines:multiple;
-moz-box-lines:multiple;
-webkit-flex-wrap:wrap;
-moz-flex-wrap:wrap;
-ms-flex-wrap:wrap;
flex-wrap:wrap;
justify-content:center;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:100%;
  `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:90%;
  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:80%;
  `}
`
const MIDDLERIGHT = styled.div`
margin:15px;
    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:130px;
    margin:5px;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:200px;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:230px;
  `}
`
const MIDDLELEFT = styled(MIDDLERIGHT)`
`
const MIDDLEMIDDLE = styled(MIDDLERIGHT)`
`
