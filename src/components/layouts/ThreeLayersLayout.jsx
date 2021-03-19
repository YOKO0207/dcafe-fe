import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";

function ThreeLayersLayout (props) {

    
    return (
        <div>
            <TOP>{props.top}</TOP>
            <MIDDLE>
                {props.middle}
            </MIDDLE>
            <BOTTOM>
                {props.bottom}
            </BOTTOM>
        </div>
        
    )
}

export default ThreeLayersLayout;

const TOP = styled.div`
margin:0 auto;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:100%;
    height:55px ;
  `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:85%;
    height:70px ;
  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:80%;
    height:85px ;
  `}
`
const MIDDLE = styled.div`
margin: 0 auto;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:90%;
  `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:75%;
  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:70%;
  `}
`
const BOTTOM = styled.div`
margin: 0 auto;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:90%;
  `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:65%;
  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:50%;
  `}
`


