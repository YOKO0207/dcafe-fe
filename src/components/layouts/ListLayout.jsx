import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import media from "styled-media-query";



function ListLayout (props) {

    const contentsLists = props.contents.map((content) =>
      <CONTENT>{content}</CONTENT>)

    return (
        <div>
            <TOP>{props.top}</TOP>
            <CONTAINER>
                {contentsLists}
            </CONTAINER>

        </div>
        
    )
}

export default ListLayout;

const TOP = styled.div`
margin:0 auto;
${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:100%;
    max-width:500px;
    height:55px ;
  `}
  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width:80%;
    height:70px ;
  `}
  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    width:70%;
    height:85px ;
  `}
`
const CONTAINER = styled.div`
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
    width:90%;
    max-width: 550px;
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
const CONTENT = styled.div`
margin:15px;

    ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:130px;
    margin:10px;
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

